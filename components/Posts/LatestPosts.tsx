import { PostsFilterContext } from '@/components/Posts/PostsFilterContext'
import PostSnippet from '@/components/Posts/PostSnippet'
import Subheading from '@/components/Subheading'
import { ClassProp, Post, Tag } from '@/components/types'
import ViewMore from '@/components/ViewMore'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'


const LatestPostsWrapper = styled.section`
    display: grid;
    gap: var(--subheading-gap);
    grid-template-rows: max-content auto;
`

const PostsListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--medium-list-gap);
`

const LatestPostsHeading = styled.div`
    align-items: center;
    display: flex;
    gap: 1em;
`

type LatestPostsProps = {
    mini?: boolean
    posts: Post[]
}

const LatestPosts = ({ className, posts, mini }: LatestPostsProps & ClassProp) => {
    /* Filter Context */
    const { query, selectedTags } = useContext(PostsFilterContext)

    /* Visible Posts */
    const [visiblePosts, setVisiblePosts] = useState<Post[]>(posts)

    useEffect(() => {
        /* If no filtering possible (like on index page) */
        if (!selectedTags && !query) {
            setVisiblePosts(posts)
            return
        }

        let filteredPosts: Post[] = posts
        if (query) {
            filteredPosts = filteredPosts.filter((post: Post) => {
                /* Convert cases */
                const lowercaseQuery = query.toLowerCase()
                const lowercaseTitle = post.title.toLowerCase()
                const lowercaseDescription = post.description.toLowerCase()

                /* Determine if tag names includes query */
                const queryTag = (tag: Tag) => tag.name.toLowerCase().includes(lowercaseQuery)

                /* Now actually filter */
                return lowercaseTitle.includes(lowercaseQuery) || post.tags.some(queryTag) || lowercaseDescription.includes(lowercaseQuery)
            })
        }
        if (selectedTags.length > 0) {
            filteredPosts = filteredPosts.filter((post: Post) => post.tags.some((tag: Tag) => selectedTags.some((selectedTag: Tag) => tag.id === selectedTag.id)))
        }

        /* Change what's visible to user! */
        setVisiblePosts(filteredPosts)
    }, [selectedTags, query])

    return (
        <LatestPostsWrapper className={className}>
            <LatestPostsHeading>
                <Subheading>Latest Posts</Subheading>
                {mini && <ViewMore href='/posts' />}
            </LatestPostsHeading>

            <PostsListWrapper>
                {
                    visiblePosts.length == 0 && <p>😲 The archives are empty!</p>
                }
                {
                    visiblePosts.map((post: Post, index: number) => <PostSnippet key={index} post={post} mini={mini} />)
                }
            </PostsListWrapper>
        </LatestPostsWrapper>
    )
}

export default LatestPosts
