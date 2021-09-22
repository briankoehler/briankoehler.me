import Layout from '@/components/Layout/Layout'
import { Post } from '@/components/types'
import { GetStaticPaths, GetStaticProps } from 'next'


type PostPageProps = {
	post: Post
}

const PostPage = ({ post }: PostPageProps) => {
	return (
		<Layout>
			{post.writing}
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