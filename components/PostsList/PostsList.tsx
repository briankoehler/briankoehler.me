import { Post } from '@/components/types'
import PostSnippet from '../LatestPosts/PostSnippet'


type PostsListProps = {
	posts: Post[]
}

const PostsList = ({ posts }: PostsListProps) => {
	return (
		<>
			{
				posts.map((post, index) => <PostSnippet key={index} post={post} />)
			}
		</>
	)
}

export default PostsList
