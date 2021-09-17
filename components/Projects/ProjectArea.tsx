import ProjectInfo from '@/components/Projects/ProjectInfo'
import { Project } from '@/components/types'
import Image from 'next/image'
import styled from 'styled-components'


const ProjectsAreaWrapper = styled.div`
    display: grid;
    gap: 1.5em;
    grid-template-columns: 1fr 1fr;
`

type ProjectAreaProps = {
    projects: Project[],
    url: string
}

const ProjectArea = ({ projects, url }: ProjectAreaProps) => {
    return (
        <ProjectsAreaWrapper>
            {
                projects.map((project: Project, index: number) => {
                    return (
                        <>
                            <Image className='image' alt={`Image of ${project.name}`} src={`http://${url}${project.image.formats.small.url}`} width={project.image.formats.small.width} height={project.image.formats.small.height} priority />
                            <ProjectInfo key={index} {...project} />
                        </>
                    )
                })
            }
        </ProjectsAreaWrapper>
    )
}

export default ProjectArea
