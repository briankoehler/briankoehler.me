import styled from 'styled-components'
import { Project } from '../types'


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
`

const ProjectInfo = ({ name, description, github, link }: Project) => {
    return (
        <ProjectInfoWrapper>
            <Header>
                <p>{name}</p>
                <div>
                    {github && <p>GitHub</p>}
                    {link && <p>Link</p>}
                </div>
            </Header>
            <p>{description}</p>
            <p>Stack</p>
        </ProjectInfoWrapper>
    )
}

export default ProjectInfo
