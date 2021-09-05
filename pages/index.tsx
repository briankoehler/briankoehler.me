import Greeting from '@/components/Greeting'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import Navbar from '@/components/Navbar'
import type { NextPage } from 'next'
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

const HomePage: NextPage = () => {
    return (
        <ContentWrapper>
            <Navbar />
            <Greeting />
            <SplitColumns>
                <h1>Featured Project</h1>
                <LatestPosts />
            </SplitColumns>
        </ContentWrapper>
    )
}

export default HomePage
