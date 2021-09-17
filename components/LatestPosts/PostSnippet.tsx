import { Post } from '@/components/types'
import styled from 'styled-components'


const PostSnippetWrapper = styled.div`
    display: grid;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    cursor: pointer;
`

const PostSnippetHead = styled.div`
    display: flex;
    justify-content: space-between;
`

const PostSnippetTitle = styled.h3`
    color: var(--font-primary);
    font-size: 1rem;
    font-size: 1.125rem;
    font-weight: regular;
    font-weight: 400;
    margin-right: 2ch;
`

const PostSnippetDescription = styled.p`
    color: var(--font-secondary);
    font-size: 1rem;
`

const PostSnippetDate = styled.p`
    color: var(--font-secondary);
    font-size: 0.75rem;
`

type PostSnippetProps = {
    post: Post
}

const PostSnippet = ({ post }: PostSnippetProps) => {
    return (
        <PostSnippetWrapper>
            <PostSnippetHead>
                <PostSnippetTitle>{post.title}</PostSnippetTitle>
                <PostSnippetDate>{post.date}</PostSnippetDate>
            </PostSnippetHead>
            <PostSnippetDescription>{post.description}</PostSnippetDescription>
        </PostSnippetWrapper>
    )
}

export default PostSnippet
