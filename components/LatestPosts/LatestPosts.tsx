import PostSnippet from '@/components/LatestPosts/PostSnippet'
import Subtitle from '@/components/Subtitle'
import { Post } from '@/components/types'
import styled from 'styled-components'


const LatestPostsWrapper = styled.section`
    display: grid;
    gap: 1.5em;
    grid-template-rows: min-content auto;
`

const PostsListWrapper = styled.div`
    gap: 1.5em;
    display: flex;
    flex-direction: column;
`

type Props = {
    posts: Post[]
}

const LatestPosts = ({ posts }: Props) => {
    return (
        <LatestPostsWrapper>
            <Subtitle>Latest Posts</Subtitle>
            <PostsListWrapper>
                {
                    posts.map((data, index) => <PostSnippet key={index} post={data} />)
                }
            </PostsListWrapper>
        </LatestPostsWrapper>
    )
}

export default LatestPosts