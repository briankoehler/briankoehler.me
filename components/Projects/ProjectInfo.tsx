import { Project } from '@/components/types'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import styled from 'styled-components'
import DynamicIcon from '../DynamicIcon'


const ProjectInfoWrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 2em;
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    padding: 1em;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProjectTitle = styled.h3`
    color: var(--font-primary);
    font-size: 1rem;
    font-size: 1.125rem;
    font-weight: regular;
    font-weight: 400;
    margin-right: 2ch;
`

const ProjectDescription = styled.p`
    color: var(--font-secondary);
    font-size: 1rem;
`

const Stack = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    width: min-content;
`

const ProjectInfo = ({ name, description, stack, github, link }: Project) => {
    return (
        <ProjectInfoWrapper>
            <Header>
                <ProjectTitle>{name}</ProjectTitle>
                <div>
                    {github && <a href={github}><SiGithub size='2rem' /></a>}
                    {link && <a href={link}><FiExternalLink size='2rem' /></a>}
                </div>
            </Header>
            <ProjectDescription>{description}</ProjectDescription>
            <Stack>
                {
                    stack.map((tech: string, index: number) => <DynamicIcon key={index} name={tech} size='2rem' />)
                }
            </Stack>
        </ProjectInfoWrapper>
    )
}

export default ProjectInfo
