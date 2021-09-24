import PostSnippet from '@/components/LatestPosts/PostSnippet'
import Subheading from '@/components/Subheading'
import { Post } from '@/components/types'
import styled from 'styled-components'


const LatestPostsWrapper = styled.section`
    display: grid;
    gap: var(--subheading-gap);
    grid-template-rows: max-content auto;
`

const PostsListWrapper = styled.div`
    gap: var(--medium-list-gap);
    display: flex;
    flex-direction: column;
`

type LatestPostsProps = {
    className?: string,
    posts: Post[]
}

const LatestPosts = ({ className, posts }: LatestPostsProps) => {
    return (
        <LatestPostsWrapper className={className}>
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