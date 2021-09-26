import { PostsFilterContext } from '@/components/Posts/PostsFilterContext'
import PostSnippet from '@/components/Posts/PostSnippet'
import Subheading from '@/components/Subheading'
import { Post, Tag } from '@/components/types'
import { useContext, useEffect, useState } from 'react'
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
    /* Filter Context */
    const { filter, selectedTags } = useContext(PostsFilterContext)

    /* Visible Posts */
    const [visiblePosts, setVisiblePosts] = useState<Post[]>(posts)

    useEffect(() => {
        if (!selectedTags) {
            setVisiblePosts(posts)
            return
        }

        if (selectedTags.length === 0) {
            setVisiblePosts(posts)
            return
        }

        const test: Post[] = []
        posts.forEach((post: Post) => {
            if (post.tags.some((tag: Tag) => selectedTags.some(selectedTag => selectedTag.id === tag.id))) {
                test.push(post)
            }
        })
        setVisiblePosts(test)
    }, [selectedTags])

    return (
        <LatestPostsWrapper className={className}>
            <Subheading>Latest Posts</Subheading>

            <PostsListWrapper>
                {
                    visiblePosts.map((post: Post, index: number) => <PostSnippet key={index} post={post} />)
                }
            </PostsListWrapper>
        </LatestPostsWrapper>
    )
}

export default LatestPosts
