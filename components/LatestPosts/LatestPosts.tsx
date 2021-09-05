import { Post } from '@/components/types'
import styled from 'styled-components'
import PostSnippet from './PostSnippet'


const LatestPostsWrapper = styled.div`
    display: grid;
    gap: 1.5em;
`

const LatestPostsTitle = styled.h2`
    color: var(--primary-color);
    font-weight: normal;
    font-size: 1.5rem;
    font-weight: 600;
`

type Props = {
    posts: Post[]
}

const LatestPosts = ({posts}: Props) => {
    return (
        <LatestPostsWrapper>
            <LatestPostsTitle>Latest Posts</LatestPostsTitle>
            {
                posts.map((data, index) => <PostSnippet key={index} post={data} />)
            }
        </LatestPostsWrapper>
    )
}

export default LatestPosts