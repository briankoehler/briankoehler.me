import Heading from '@/components/Heading'
import Layout from '@/components/Layout/Layout'
import { Post } from '@/components/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'


const Writing = styled(ReactMarkdown)`
	font-size: var(--font-large);
	font-size: 1.25rem;
	line-height: 175%;
	/* max-width: 80%; */
	display: flex;
	flex-direction: column;
	gap: 1em;

	a {
		color: hsl(202, 100%, 50%);

		:not(h2 a) {
			font-weight: 500;
		}

		&:hover {
			color: hsl(202, 100%, 44%);
		}
	}

	* + h2 {
		margin-top: 1em;
	}

	ul {
		padding-left: 3em;
		display: flex;
		flex-direction: column;
		gap: var(--medium-list-gap);
	}

	ul li {
		list-style: square;
	}

	code {
		font-family: 'Fira Code';
		color: orange;
		font-weight: 500;
	}

	li p {
		display: inline;
	}
`

const PostImageWrapper = styled.figure`
    margin: 0;
    
    figcaption {
        font-style: italic;
        color: var(--font-secondary);
        font-size: var(--font-medium);
    }
`

type PostPageProps = {
	post: Post,
    url: string
}

const PostPage = ({ post, url }: PostPageProps) => {

    const markdownComponents: object = {
        h1: 'h2',
        p: (paragraph: any) => {
            const { node } = paragraph
            
            if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "")
                const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')
                const metaWidth = image.properties.alt.match(/{([^}]+)x/)
                const metaHeight = image.properties.alt.match(/x([^}]+)}/)
                const width = metaWidth ? metaWidth[1] : "3360"
                const height = metaHeight ? metaHeight[1] : "2050"
                
                return (
                    <PostImageWrapper>
                        <Image src={`http://${url}${image.properties.src}`} width={width} height={height} alt={alt} priority={isPriority} />
                        <figcaption>{alt}</figcaption>
                    </PostImageWrapper>
                )
            }
            return <p>{paragraph.children}</p>
        }
    }

	return (
		<Layout title={`Brian Koehler - ${post.title}`} description={post.description} url={`https://briankoehler.me/posts/${post.slug}`} >
			<Heading bigText={post.title} littleText={post.description} />
			<Writing components={markdownComponents} transformImageUri={(uri) => `http://${url}${uri}`}>{post.writing}</Writing>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	/* Get posts */
	const postsResp = await fetch(`http://${process.env.CMS_URL}/posts`)
	const posts = await postsResp.json()

	/* Get post slugs */
	const paths = posts.map((post: Post) => ({
		params: { slug: post.slug }
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	/* Get post */
	const postsResp = await fetch(`http://${process.env.CMS_URL}/posts?slug=${params.slug}`)
	const posts = await postsResp.json()
	const post = posts[0]

    /* Bad practice? */
    const url = process.env.CMS_URL

	return { props: { post, url } }
}

export default PostPage
