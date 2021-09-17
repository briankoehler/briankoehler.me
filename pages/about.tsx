import ExperienceArea from '@/components/Experience/ExperienceArea'
import Heading from '@/components/Heading'
import Layout from '@/components/Layout/Layout'
import Technologies from '@/components/Technologies/Technologies'
import { Experience } from '@/components/types'
import type { GetServerSideProps } from 'next'


type AboutPageProps = {
	experiences: Experience[]
}

const AboutPage = ({ experiences }: AboutPageProps) => {
	return (
		<Layout>
            <Heading bigText='Get to know me.' littleText='The one-stop shop to find anything about me from my experience, to my favorite technologies, and even what I enjoy doing.' />
            <Technologies />
            <ExperienceArea experiences={experiences} />
        </Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	/* Get experiences */
	const experiencesResp = await fetch(`http://${process.env.CMS_URL}/experiences`)
	const experiences = await experiencesResp.json()

	return {
		props: { experiences }
	}
}

export default AboutPage
