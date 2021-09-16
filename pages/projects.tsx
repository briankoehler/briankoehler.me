import Heading from "@/components/Heading"
import Layout from "@/components/Layout/Layout"
import ProjectArea from "@/components/Projects/ProjectArea"
import { Project } from '@/components/types'
import { GetServerSideProps } from 'next'


type ProjectsPageProps = {
    projects: Project[]
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
    return (
        <Layout>
            <Heading bigText='Check out my work.' littleText='A collection of my favorite projects I’ve contributed to or hacked at solo. Each project also has a list of technologies that I learned a lot about.' />
            <ProjectArea projects={projects} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    /* Get projects */
	const projectsResp = await fetch(`http://${process.env.CMS_URL}/projects`)
	const projects = await projectsResp.json()

    return {
        props: { projects }
    }
}

export default ProjectsPage
