import Heading from '@/components/Heading'
import Layout from '@/components/Layout/Layout'
import { Post } from '@/components/types'
import marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'


const Writing = styled.p`
	font-size: var(--font-large);
	line-height: 175%;
	max-width: 75%;

	a {
		color: hsl(202, 100%, 50%);
		font-weight: 500;

		&:hover {
			color: hsl(202, 100%, 44%);
		}
	}
`

type PostPageProps = {
	post: Post
}

const PostPage = ({ post }: PostPageProps) => {
	return (
		<Layout title={`Brian Koehler - ${post.title}`} description={post.description} url={`https://briankoehler.me/posts/${post.slug}`} >
			<Heading bigText={post.title} littleText={post.description} />
			<Writing>
				{ReactHtmlParser(marked(post.writing))}
			</Writing>
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
