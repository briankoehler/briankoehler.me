import Heading from '@/components/Heading'
import Layout from '@/components/Layout/Layout'
import PostsList from '@/components/PostsList/PostsList'
import { Post } from '@/components/types'
import { GetStaticProps } from 'next'


type PostsPageProps = {
	posts: Post[]
}

const PostsPage = ({ posts }: PostsPageProps) => {
	return (
		<Layout title='Brian Koehler - Posts' description='Posts by Brian Koehler.' url='https://briankoehler.me/posts' >
			<Heading bigText='Brain of Brian.' littleText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere dui dui, vel laoreet urna sagittis ut. Donec laoreet, sapien non aliquet semper, quam purus interdum diam, id iaculis justo magna eget augue. Aenean volutpat lorem at ante blandit volutpat. Nam molestie ultrices libero, non consequat lacus suscipit eu.' />
			<PostsList posts={posts} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	/* Get latest posts */
	const postsResp = await fetch(`http://${process.env.CMS_URL}/posts`)
	const posts = await postsResp.json()

	/* Return props */
	return {
		props: { posts }
	}
}

export default PostsPage
