import { Experience, Responsibility } from '@/components/types'
import styled from 'styled-components'


const ExperienceBlockWrapper = styled.div`
    display: grid;
    gap: 1em;
    padding: 1em;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    height: min-content;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
`

const ResponsibilitiesWrapper = styled.div`
    display: grid;
    gap: 0.5em;
    color: var(--font-secondary);
    line-height: 150%;
`

const Period = styled.p`
    color: var(--font-secondary);
    font-size: 0.75rem;
`

const ExperienceBlock = ({ company, position, period, url, responsibilities }: Experience) => {
    return (
        <ExperienceBlockWrapper>
            <Header>
                <p>{position} <a className='blue' href={url}>@{company}</a></p>
                <Period>{period}</Period>
            </Header>
            <ResponsibilitiesWrapper>
                {
                    responsibilities.map((responsibility: Responsibility, index: number) => <p key={index}>{responsibility.value}</p>)
                }
            </ResponsibilitiesWrapper>
        </ExperienceBlockWrapper>
    )
}

export default ExperienceBlock
