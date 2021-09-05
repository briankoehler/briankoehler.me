import styled from 'styled-components'


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

const PostSnippet = (props: { title: string, description: string, date: Date }) => {
    return (
        <PostSnippetWrapper>
            <PostSnippetHead>
                <PostSnippetTitle>{props.title}</PostSnippetTitle>
                <PostSnippetDate>{props.date.getMonth() + 1}/{props.date.getDate()}/{props.date.getFullYear()}</PostSnippetDate>
            </PostSnippetHead>
            <PostSnippetDescription>{props.description}</PostSnippetDescription>
        </PostSnippetWrapper>
    )
}

export default PostSnippet
