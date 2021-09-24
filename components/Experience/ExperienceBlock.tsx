import { Experience, Responsibility } from '@/components/types'
import styled from 'styled-components'


const ExperienceBlockWrapper = styled.div`
    display: grid;
    gap: var(--medium-list-gap);
    padding: var(--box-padding);
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    height: max-content;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: var(--font-large);
`

const ResponsibilitiesWrapper = styled.div`
    display: grid;
    gap: calc(var(--medium-list-gap) / 2);
    color: var(--font-secondary);
    line-height: 150%;
`

const Period = styled.p`
    color: var(--font-secondary);
    font-size: var(--font-small);
`

const ExperienceBlock = ({ className, company, position, period, url, responsibilities }: Experience & { className: string }) => {
    return (
        <ExperienceBlockWrapper className={className}>
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
