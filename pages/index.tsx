import { LinkButton } from '@/components/Button'
import ContactForm from '@/components/ContactForm/ContactForm'
import FeaturedProject from '@/components/FeaturedProject'
import Heading from '@/components/Heading'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import Layout from '@/components/Layout/Layout'
import { Post } from '@/components/types'
import Portrait from '@/public/portrait.jpg'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


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
    posts: Post[],
    url: string
}

const HomePage = ({ featuredProject, posts, url }: Props) => {
    return (
        <Layout>
            <SplitColumns>
                <Heading bigText='I&apos;m Brian, software&nbsp;engineer.' littleText={
                    [
                        `Welcome to my website! I'm a developer studying at the University of Florida with a strong interest in all things web development. `,
                        <a key='github' href='https://github.com/briankoehler/' className='blue'>Glance over my GitHub</a>,
                        ' or ',
                        <Link key='link' href='/posts/'><a className='blue'>peruse some posts</a></Link>,
                        ' for some nonsensical thoughts.'
                    ]
                }>
                    <LinkButton href='#contact'>Let's connect</LinkButton>
                </Heading>
                <Image src={Portrait} alt='Cartoon portrait of me smiling!' priority />
            </SplitColumns>

            <SplitColumns>
                <FeaturedProject featuredProject={featuredProject} url={url} />
                <LatestPosts posts={posts} />
            </SplitColumns>

            <ContactForm />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* Get featured project */
    const featuredProjectResp = await fetch(`http://${process.env.CMS_URL}/featured-project`)
    const featuredProject = await featuredProjectResp.json()

    /* Get latest posts */
    const latestPostsResp = await fetch(`http://${process.env.CMS_URL}/posts`)
    const posts = await latestPostsResp.json()

    /* Bad practice? */
    const url = process.env.CMS_URL

    /* Return props */
    return {
        props: { featuredProject, posts, url }
    }
}

export default HomePage
