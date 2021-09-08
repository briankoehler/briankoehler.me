import FeaturedProject from '@/components/FeaturedProject'
import Greeting from '@/components/Greeting'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import Navbar from '@/components/Navbar'
import { Post } from '@/components/types'
import type { GetServerSideProps } from 'next'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    max-width: 60%;
    margin: auto;
    display: grid;
    gap: 7em;

    main {
        display: grid;
        gap: 7em;
    }
`

const SplitColumns = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5em;
`

type Props = {
    featuredProject: {
        link: string,
        cover: {
            width: number,
            height: number,
            url: string
        }
    },
    posts: Post[]
}

const HomePage = ({featuredProject, posts}: Props) => {
    return (
        <ContentWrapper>
            <Navbar />
            <main>
                <Greeting />
                <SplitColumns>
                    <FeaturedProject featuredProject={featuredProject} />
                    <LatestPosts posts={posts}/>
                </SplitColumns>
            </main>
        </ContentWrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* Get featured project */
    const featuredProjectResp = await fetch('http://localhost:1337/featured-project')
    const featuredProject = await featuredProjectResp.json()

    /* Get latest posts */
    const latestPostsResp = await fetch('http://localhost:1337/posts')
    const posts = await latestPostsResp.json()

    /* Return props */
    return {
        props: { featuredProject, posts }
    }
}

export default HomePage
