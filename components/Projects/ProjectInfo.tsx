import { Project } from '@/components/types'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import styled from 'styled-components'
import DynamicIcon from '../DynamicIcon'


const ProjectInfoWrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    align-self: center;
    gap: 1em;
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    padding: 1em;
    height: max-content;
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
    line-height: 150%;
`

const Stack = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    width: max-content;
`

const ProjectInfo = ({ name, description, stack, github, link }: Project) => {
    return (
        <ProjectInfoWrapper>
            <Header>
                <ProjectTitle>{name}</ProjectTitle>
                <div>
                    {github && <a href={github}><SiGithub size='1.5em' /></a>}
                    {link && <a href={link}><FiExternalLink size='1.5rem' /></a>}
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
