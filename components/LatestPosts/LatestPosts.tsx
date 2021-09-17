import PostSnippet from '@/components/LatestPosts/PostSnippet'
import Subheading from '@/components/Subheading'
import { Post } from '@/components/types'
import styled from 'styled-components'


const LatestPostsWrapper = styled.section`
    display: grid;
    gap: 1.5em;
    grid-template-rows: max-content auto;
`

const PostsListWrapper = styled.div`
    gap: 1.5em;
    display: flex;
    flex-direction: column;
`

type LatestPostsProps = {
    posts: Post[]
}

const LatestPosts = ({ posts }: LatestPostsProps) => {
    return (
        <LatestPostsWrapper>
            <Subheading>Latest Posts</Subheading>
            <PostsListWrapper>
                {
                    posts.map((data: Post, index: number) => <PostSnippet key={index} post={data} />)
                }
            </PostsListWrapper>
        </LatestPostsWrapper>
    )
}

export default LatestPosts