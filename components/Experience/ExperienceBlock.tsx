import { ClassProp, Experience, Responsibility } from '@/components/types'
import styled from 'styled-components'


const ExperienceBlockWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid var(--border-primary);
    display: grid;
    gap: var(--medium-list-gap);
    height: max-content;
    padding: var(--box-padding);
`

const Header = styled.div`
    display: flex;
    font-size: var(--font-large);
    gap: 1em;
    justify-content: space-between;
`

const ResponsibilitiesWrapper = styled.ul`
    color: var(--font-secondary);
    display: grid;
    gap: calc(var(--medium-list-gap) / 2);
    line-height: 150%;
    padding-left: 1em;

    li {
        list-style: square;
    }
`

const Period = styled.p`
    color: var(--font-secondary);
    font-size: var(--font-small);
`

const ExperienceBlock = ({ className, company, position, period, url, responsibilities }: Experience & ClassProp) => {
    return (
        <ExperienceBlockWrapper className={className}>
            <Header>
                <p>{position} <a className='blue' href={url}>@{company}</a></p>
                <Period>{period}</Period>
            </Header>
            <ResponsibilitiesWrapper>
                {
                    responsibilities.map((responsibility: Responsibility, index: number) => <li key={index}>{responsibility.value}</li>)
                }
            </ResponsibilitiesWrapper>
        </ExperienceBlockWrapper>
    )
}

export default ExperienceBlock
