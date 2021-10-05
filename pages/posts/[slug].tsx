import Heading from '@/components/Heading'
import Layout from '@/components/Layout/Layout'
import { Post } from '@/components/types'
import { GetStaticPaths, GetStaticProps } from 'next'
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
		font-family: 'Consolas';
		color: orange;
		font-weight: 600;
	}

	li p {
		display: inline;
	}
`

type PostPageProps = {
	post: Post
}

const PostPage = ({ post }: PostPageProps) => {
	return (
		<Layout title={`Brian Koehler - ${post.title}`} description={post.description} url={`https://briankoehler.me/posts/${post.slug}`} >
			<Heading bigText={post.title} littleText={post.description} />
			<Writing children={post.writing} components={{ h1: 'h2' }} />
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

	return { props: { post } }
}

export default PostPage
