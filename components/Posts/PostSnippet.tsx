import { Post, Tag } from '@/components/types'
import Link from 'next/link'
import styled from 'styled-components'


const PostSnippetWrapper = styled.a`
    display: grid;
    gap: var(--small-subheading-gap);
    padding: var(--box-padding);
    border-radius: 4px;
    border: 1px solid var(--border-primary);
    cursor: pointer;
    transition: box-shadow 0.2s;

    :hover {
        box-shadow: 2px 2px 3px hsla(0, 0%, 0%, 0.05);
    }
`

const PostSnippetHead = styled.div`
    display: flex;
    justify-content: space-between;
`

const PostSnippetTitle = styled.h3`
    color: var(--font-primary);
    font-size: var(--font-large);
    font-weight: regular;
    font-weight: 400;
    margin-right: 2ch;
`

const PostSnippetDescription = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--font-secondary);
    font-size: var(--font-medium);
`

const PostSnippetDate = styled.p`
    color: var(--font-secondary);
    font-size: var(--font-small);
`

const TagsWrapper = styled.div`
    display: flex;
    gap: var(--medium-list-gap);
    padding: 0;
`

const TagLabel = styled.p`
    color: var(--font-secondary);
    border-radius: 4px;
    padding: 0.5em;
    font-size: var(--font-small);
    padding-left: 0;
    padding-right: 0;
`

type PostSnippetProps = {
    post: Post
}

const PostSnippet = ({ post }: PostSnippetProps) => {
    return (
        <Link href={`/posts/${post.slug}`} passHref>
            <PostSnippetWrapper>
                <PostSnippetHead>
                    <PostSnippetTitle>{post.title}</PostSnippetTitle>
                    <PostSnippetDate>{post.date}</PostSnippetDate>
                </PostSnippetHead>

                <PostSnippetDescription>{post.description}</PostSnippetDescription>

                <TagsWrapper>
                    {
                        post.tags.map((tag: Tag, index: number) => <TagLabel key={index}>#{tag.name}</TagLabel>)
                    }
                </TagsWrapper>
            </PostSnippetWrapper>
        </Link>
    )
}

export default PostSnippet
