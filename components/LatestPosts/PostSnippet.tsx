import styled from 'styled-components'
import { Post } from '../types'


const PostSnippetWrapper = styled.div`
    display: grid;
    gap: 0.5em;
`

const PostSnippetHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostSnippetTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: regular;
    font-weight: 400;
    `

const PostSnippetDescription = styled.p`
    color: hsla(0, 0%, 65%, 1);
    font-size: 1rem;
`

const PostSnippetDate = styled.p`
    color: hsla(0, 0%, 65%, 1);
    font-size: 0.75rem;
`

type Props = {
    post: Post
}

const PostSnippet = ({post}: Props) => {
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
