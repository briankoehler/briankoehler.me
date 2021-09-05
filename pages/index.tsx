import Greeting from '@/components/Greeting'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import Navbar from '@/components/Navbar'
import { Post } from '@/components/types'
import type { GetStaticProps } from 'next'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    max-width: 60%;
    margin: auto;
    display: grid;
    gap: 7em;
`

const SplitColumns = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`

type Props = {
    posts: Post[]
}

const HomePage = ({posts}: Props) => {
    return (
        <ContentWrapper>
            <Navbar />
            <Greeting />
            <SplitColumns>
                <h1>Featured Project</h1>
                <LatestPosts posts={posts}/>
            </SplitColumns>
        </ContentWrapper>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const resp = await fetch('http://localhost:1337/posts')
    const posts = await resp.json()
    return {
        props: { posts }
    }
}

export default HomePage
