import Button from '@/components/Button'
import FeaturedProject from '@/components/FeaturedProject'
import Heading from '@/components/Heading'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import Navbar from '@/components/Navbar'
import { Post } from '@/components/types'
import Portrait from '@/public/portrait2.jpg'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    padding: 1em 0 0 0 ;
    display: grid;
    gap: 5em;
    transition: max-width 0.2s;

    main {
        display: grid;
        gap: 5em;
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

const HomePage = ({ featuredProject, posts }: Props) => {
    return (
        <ContentWrapper>
            <Navbar />
            <main>
                <SplitColumns>
                    <Heading bigText='I&apos;m Brian, software engineer.' littleText={
                        [
                            `Welcome to my website! I'm a developer studying at the University of Florida with a strong interest in all things web development. `,
                            <a href='https://github.com/briankoehler/' className='blue'>Glance over my GitHub</a>,
                            ' or ',
                            <Link href='/posts/'><a className='blue'>peruse some posts</a></Link>,
                            ' for some nonsensical thoughts.'
                        ]
                    }>
                        <Button href='#contact'>Let's connect</Button>
                    </Heading>
                    <Image src={Portrait} />
                </SplitColumns>

                <SplitColumns>
                    <FeaturedProject featuredProject={featuredProject} />
                    <LatestPosts posts={posts} />
                </SplitColumns>
            </main>
        </ContentWrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* Get featured project */
    const featuredProjectResp = await fetch('http://localhost:8082/featured-project')
    const featuredProject = await featuredProjectResp.json()

    /* Get latest posts */
    const latestPostsResp = await fetch('http://localhost:8082/posts')
    const posts = await latestPostsResp.json()

    /* Return props */
    return {
        props: { featuredProject, posts }
    }
}

export default HomePage
