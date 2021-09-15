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
        <div>
            <ProjectArea projects={data} />
        </div>
    )
}

export default ProjectsPage
