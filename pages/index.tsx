import { LinkButton } from '@/components/Button'
import ContactForm from '@/components/ContactForm/ContactForm'
import FeaturedProject from '@/components/FeaturedProject'
import Heading from '@/components/Heading'
import CustomHead from '@/components/Layout/CustomHead'
import LatestPosts from '@/components/Posts/LatestPosts'
import { Post } from '@/components/types'
import Portrait from '@/public/portrait4.webp'
import * as fs from 'fs'
import * as http from 'http'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCode, FaRegPaperPlane } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import styled from 'styled-components'


const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--medium-list-gap);
`

const ContactLink = styled.a`
    display: flex;
    gap: var(--medium-list-gap);
    align-items: center;
    width: max-content;
`

const PortraitWrapper = styled.section`
    @media only screen and (max-width: 950px) {
        max-width: 60%;
        justify-self: center;
    }
`

const IndexGrid = styled.div`
    display: grid;
    grid-template-areas: 
        'greeting greeting portrait'
        'project project posts'
        'contact form form';
    grid-template-columns: 3fr 0.5fr 2fr;
    gap: inherit;

    .greeting {
        grid-area: greeting;
    }

    .portrait {
        grid-area: portrait;
    }

    .featured-project {
        grid-area: project;
    }

    .latest-posts {
        grid-area: posts;
    }

    .socials {
        grid-area: contact;
    }

    form {
        grid-area: form;
    }

    @media only screen and (max-width: 950px) {
        grid-template-areas: 'portrait' 'greeting' 'project' 'posts' 'contact' 'form';
        grid-template-columns: 1fr;
    }
`

const IndexButtonsWrapper = styled.div`
    display: flex;
    gap: var(--medium-list-gap);
    flex-wrap: wrap;
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
        <>
            <CustomHead title='Brian Koehler' description='Portfolio of Brian Koehler.' url='https://briankoehler.me' />

            <IndexGrid>
                {/* Greeting */}
                <Heading className='greeting' bigText='I&apos;m Brian, software&nbsp;engineer.' littleText={
                    [
                        `Welcome to my website! I'm a developer studying at the University of Florida with a strong interest in all things web development. `,
                        <a key='github' href='https://github.com/briankoehler/' className='blue'>Glance over my GitHub</a>,
                        ' or ',
                        <Link key='link' href='/posts/'><a className='blue'>peruse some posts</a></Link>,
                        ' for some nonsensical thoughts.'
                    ]
                }>
                    <IndexButtonsWrapper>
                        <LinkButton href='/projects' icon={<FaCode size='1em' />}>Check my work</LinkButton>
                        <LinkButton href='/resume.pdf' icon={<HiOutlineDocumentText size='1em' />} level='secondary'>Grab a resume</LinkButton>
                    </IndexButtonsWrapper>
                </Heading>

                {/* Cartoon portrait */}
                <PortraitWrapper className='portrait'> {/* div was necessary b/c Vercel can't fix their Image component */}
                    <Image className='test' src={Portrait} alt='Cartoon portrait of me smiling!' priority />
                </PortraitWrapper>

                {/* Featured project */}
                <FeaturedProject className='featured-project' featuredProject={featuredProject} url={url} />

                {/* Some latest posts */}
                <LatestPosts className='latest-posts' posts={posts} mini />

                {/* Contact form heading */}
                <Heading className='socials' bigText='Wanna get in&nbsp;contact?' littleText={`Check out the links below, or fill out this form and I'll get back to you in a jiffy.`}>
                    <ContactList>
                        <li>
                            <ContactLink className='blue' href='mailto:briandkoehler@gmail.com'>
                                <FaRegPaperPlane size='2em' />
                                <p>briandkoehler@gmail.com</p>
                            </ContactLink>
                        </li>
                        <li>
                            <ContactLink className='blue' href='https://github.com/briankoehler'>
                                <SiGithub size='2em' />
                                <p>github.com/briankoehler</p>
                            </ContactLink>
                        </li>
                        <li>
                            <ContactLink className='blue' href='https://instagram.com/koehlerexpress'>
                                <SiInstagram size='2em' />
                                <p>@koehlerexpress</p>
                            </ContactLink>
                        </li>
                        <li>
                            <ContactLink className='blue' href='https://linkedin.com/in/briandkoehler'>
                                <SiLinkedin size='2em' />
                                <p>in/briandkoehler</p>
                            </ContactLink>
                        </li>
                    </ContactList>
                </Heading>

                {/* Contact Form */}
                <ContactForm />
            </IndexGrid>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    /* Get featured project */
    const featuredProjectResp = await fetch(`http://${process.env.CMS_URL}/featured-project`)
    const featuredProject = await featuredProjectResp.json()

    /* Get latest posts */
    const latestPostsResp = await fetch(`http://${process.env.CMS_URL}/posts`)
    const posts = await latestPostsResp.json()

    /* Retrieve resume url from CMS */
    const resumeResp = await fetch(`http://${process.env.CMS_URL}/resume`)
    const resume = await resumeResp.json()
    const resumeUrl = resume.pdf.url

    /* Retrieve resume */
    const file = fs.createWriteStream('./public/resume.pdf')
    http.get(`http://${process.env.CMS_URL}${resumeUrl}`, (resp) => resp.pipe(file))

    /* Bad practice? */
    const url = process.env.CMS_URL

    /* Return props */
    return {
        props: { featuredProject, posts, url }
    }
}

export default HomePage
