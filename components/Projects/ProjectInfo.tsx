import DynamicIcon from '@/components/DynamicIcon'
import { Project } from '@/components/types'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import styled from 'styled-components'


const ProjectInfoWrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    align-self: center;
    gap: 1em;
    border-radius: 4px;
    border: 1px solid var(--border-primary);
    padding: var(--box-padding);
    height: max-content;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
        color: var(--font-secondary);
        transition: color 0.2s;

        :hover {
            color: var(--font-primary);
        }
    }
`

const ProjectTitle = styled.h3`
    color: var(--font-primary);
    font-size: var(--font-medium);
    font-size: var(--font-large);
    font-weight: regular;
    font-weight: 400;
    margin-right: 2ch;
`

const ProjectDescription = styled.p`
    color: var(--font-secondary);
    font-size: var(--font-medium);
    line-height: 150%;
`

const Stack = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    width: max-content;
`

const ProjectInfo = ({ className, name, description, stack, github, link }: Project & { className: string }) => {
    return (
        <ProjectInfoWrapper className={className}>
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
