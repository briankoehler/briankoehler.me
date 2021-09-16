import Heading from "@/components/Heading"
import Layout from "@/components/Layout/Layout"
import ProjectArea from "@/components/Projects/ProjectArea"


export interface Project {
    id: number,
    name: string,
    description: string,
    github?: string,
    link?: string
}

const data = [
    {
        id: 0,
        name: 'Symfal',
        description: 'Web application developed to enable people to build genuine connections through music and common interests. AWS services used include EC2, DynamoDB, Lambda, API Gateway, Cognito, Route 53, and SES.',
    }
]

const ProjectsPage = () => {
    return (
        <Layout>
            <Heading bigText='Check out my work.' littleText='A collection of my favorite projects I’ve contributed to or hacked at solo. Each project also has a list of technologies that I learned a lot about.' />
            <ProjectArea projects={data} />
        </Layout>
    )
}

export default ProjectsPage
