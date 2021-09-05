import styled from 'styled-components'
import PostSnippet from "./PostSnippet"


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

const dummyData: { title: string, description: string, date: Date }[] = [
    {
        title: 'Behind Symfal: The Code',
        description: 'A deep-dive into the architecture and infrastructure of the #1 chat app.',
        date: new Date(2021, 8, 3)
    },
    {
        title: 'Serverside Rendering with Next.js',
        description: 'How to take advantage of this React Framework’s best feature.',
        date: new Date(2021, 7, 17)
    },
    {
        title: 'Winner Winner Chicken Dinner',
        description: 'An overview of my fantasy baseball team and strategy.',
        date: new Date(2021, 7, 12)
    }
]

const LatestPosts = () => {
    return (
        <LatestPostsWrapper>
            <LatestPostsTitle>Latest Posts</LatestPostsTitle>
            {
                dummyData.map((data, index) => <PostSnippet key={index} {...data} />)
            }
        </LatestPostsWrapper>
    )
}

export default LatestPosts