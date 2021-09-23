import ProjectInfo from '@/components/Projects/ProjectInfo'
import { Project } from '@/components/types'
import Image from 'next/image'
import styled from 'styled-components'


const ProjectsAreaWrapper = styled.div`
    display: grid;
    gap: 4em;
`

const ProjectWrapper = styled.div<{ revert: boolean }>`
    display: grid;
    gap: 4em;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    span {
        filter: drop-shadow(2px 2px 8px hsla(0, 0%, 0%, 0.25));
    }

    .project-image {
        grid-area: image;
        grid-column: ${props => props.revert ? '1 / span 2' : '2 / span 2'};
        grid-row: 1;
    }

    .project-info {
        grid-area: desc;
        grid-column: ${props => props.revert ? '2' : '1'};
        grid-row: 1;
    }

    @media only screen and (max-width: 950px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

        .project-image {
            grid-row: 2;
            grid-column: 1;
        }

        .project-info {
            grid-row: 1;
            grid-column: 1;
        }
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
                    return (
                        <ProjectWrapper revert={index % 2 === 0} key={index}>
                            <span className='project-image'>
                                <Image className='image' alt={`Image of ${project.name}`} src={`http://${url}${project.image.url}`} width={project.image.width} height={project.image.height} priority />
                            </span>
                            <ProjectInfo className='project-info' {...project} />
                        </ProjectWrapper>
                    )
                })
            }
        </ProjectsAreaWrapper>
    )
}

export default ProjectArea
