import Heading from '@/components/Heading'
import CustomHead from '@/components/Layout/CustomHead'
import LatestPosts from '@/components/Posts/LatestPosts'
import PostsFilter from '@/components/Posts/PostsFilter'
import { PostsFilterProvider } from '@/components/Posts/PostsFilterContext'
import { Post, Tag } from '@/components/types'
import { GetStaticProps } from 'next'
import styled from 'styled-components'


const PostsGrid = styled.div`
	display: grid;
	gap: inherit;
	grid-template-areas:
		'heading heading'
		'search posts';
	grid-template-columns: 1fr 2fr;

	.posts-heading {
		grid-area: heading;
	}

	.posts-list {
		grid-area: posts;
	}

	.posts-filter {
		grid-area: search;
	}

	@media only screen and (max-width: 950px) {
		grid-template-columns: 1fr;
		grid-template-areas: 'heading' 'search' 'posts';
	}
`

type PostsPageProps = {
	posts: Post[],
	tags: Tag[]
}

const PostsPage = ({ posts, tags }: PostsPageProps) => {
	return (
		<>
			<CustomHead title='Brian Koehler - Posts' description='Posts by Brian Koehler.' url='https://briankoehler.me/posts' />

			<PostsGrid>
				<Heading className='posts-heading' bigText='Brain of Brian.' littleText='Some tutorials and documented thoughts that have managed to escape from my brain. Currently under heavy construction; ignore the mess please.' />

				<PostsFilterProvider>
					<PostsFilter className='posts-filter' tags={tags} />
					<LatestPosts className='posts-list' posts={posts} />
				</PostsFilterProvider>
			</PostsGrid>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	/* Get latest posts */
	const postsResp = await fetch(`http://${process.env.CMS_URL}/posts`)
	const posts = await postsResp.json()

	/* Get all tags */
	const tagsResp = await fetch(`http://${process.env.CMS_URL}/tags`)
	const tags = await tagsResp.json()

	/* Return props */
	return {
		props: { posts, tags }
	}
}

export default PostsPage
