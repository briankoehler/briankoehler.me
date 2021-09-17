import ProjectInfo from '@/components/Projects/ProjectInfo'
import { Project } from '@/components/types'
import Image from 'next/image'
import styled from 'styled-components'


const ProjectsAreaWrapper = styled.div`
    display: grid;
    gap: 4em;
`

const ProjectWrapper = styled.div<{ invert?: boolean }>`
    display: grid;
    gap: 4em;
    align-items: center;
    grid-template-columns: ${props => props.invert ? '2fr 3fr' : '3fr 2fr'};

    span {
        filter: drop-shadow(2px 2px 8px hsla(0, 0%, 0%, 0.25));
    }
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
                    if (index % 2 === 0) {
                        return (
                            <>
                                <ProjectWrapper>
                                    <span>
                                        <Image className='image' alt={`Image of ${project.name}`} src={`http://${url}${project.image.url}`} width={project.image.width} height={project.image.height} priority />
                                    </span>
                                    <ProjectInfo key={index} {...project} />
                                </ProjectWrapper>
                            </>
                        )
                    }

                    return (
                        <>
                            <ProjectWrapper invert>
                                <ProjectInfo key={index} {...project} />
                                <span>
                                    <Image className='image' alt={`Image of ${project.name}`} src={`http://${url}${project.image.url}`} width={project.image.width} height={project.image.height} priority />
                                </span>
                            </ProjectWrapper>
                        </>
                    )
                })
            }
        </ProjectsAreaWrapper>
    )
}

export default ProjectArea
