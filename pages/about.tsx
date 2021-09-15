import ExperienceArea from '@/components/Experience/ExperienceArea'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Technologies from '@/components/Technologies/Technologies'
import { Experience } from '@/components/types'
import type { GetServerSideProps } from 'next'
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

type AboutPageProps = {
	experiences: Experience[]
}

const AboutPage = ({ experiences }: AboutPageProps) => {
	return (
		<ContentWrapper>
			<Navbar />
			<main>
				<Heading bigText='Get to know me.' littleText='The one-stop shop to find anything about me from my experience, to my favorite technologies, and even what I enjoy doing.' />
				<Technologies />
				<ExperienceArea experiences={experiences} />
			</main>
		</ContentWrapper>
	)
}

export const getStaticProps: GetServerSideProps = async () => {
	/* Get experiences */
	const experiencesResp = await fetch(`http://${process.env.CMS_URL}/experiences`)
	const experiences = await experiencesResp.json()

	return {
		props: { experiences }
	}
}

export default AboutPage
