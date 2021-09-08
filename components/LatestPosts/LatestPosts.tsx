import { Post } from '@/components/types'
import styled from 'styled-components'
import PostSnippet from './PostSnippet'


const LatestPostsWrapper = styled.section`
    display: grid;
    gap: 1.5em;
    grid-template-rows: min-content auto;
`

const LatestPostsTitle = styled.h2`
    color: var(--font-primary);
    font-weight: normal;
    font-size: 1.5rem;
    font-weight: 600;
`

const PostsListWrapper = styled.div`
    display: grid;
    gap: 0.75em;
`

type Props = {
    posts: Post[]
}

const LatestPosts = ({posts}: Props) => {
    return (
        <LatestPostsWrapper>
            <LatestPostsTitle>Latest Posts</LatestPostsTitle>
            <PostsListWrapper>
                {
                    posts.map((data, index) => <PostSnippet key={index} post={data} />)
                }
            </PostsListWrapper>
        </LatestPostsWrapper>
    )
}

export default LatestPosts