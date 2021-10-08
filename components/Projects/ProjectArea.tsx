import ProjectInfo from '@/components/Projects/ProjectInfo'
import { Project } from '@/components/types'
import Image from 'next/image'
import styled from 'styled-components'


const ProjectsAreaWrapper = styled.section`
    display: grid;
    gap: var(--page-gap);
`

const ProjectWrapper = styled.div<{ revert: boolean }>`
    align-items: center;
    display: grid;
    gap: calc(var(--page-gap) * (5 / 7));
    grid-template-areas: ${props => props.revert ? `'image image image info info'` : `'info info image image image'`};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    span {
        filter: drop-shadow(2px 2px 8px hsla(0, 0%, 0%, 0.25));
    }

    .project-image {
        grid-area: image;
    }

    .project-info {
        grid-area: info;
    }

    @media only screen and (max-width: 950px) {
        gap: calc(var(--page-gap) / 2);
        grid-template-areas: 'info' 'image';
        grid-template-columns: 1fr;
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
                                <Image className='image' alt={`Image of ${project.name}`} src={`http://${url}${project.image.url}`} placeholder='blur' blurDataURL='/projectplaceholder.png' width={project.image.width} height={project.image.height} priority />
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
