import styled from 'styled-components'


const ExperienceBlockWrapper = styled.div`
    display: grid;
    gap: 1em;
    padding: 1em;
    border: 2px solid #f3f3f3;
    border-radius: 8px;
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
`

const Period = styled.p`
    color: var(--font-secondary);
    font-size: 0.75rem;
`

type Props = {
    company: string,
    position: string,
    responsibilities: string[],
    period: string,
    url: string
}

const ExperienceBlock = ({ company, position, responsibilities, period, url }: Props) => {
    return (
        <ExperienceBlockWrapper>
            <Header>
                <p>{position} <a className='blue' href={url}>@{company}</a></p>
                <Period>{period}</Period>
            </Header>
            <ResponsibilitiesWrapper>
                {
                    responsibilities.map((responsibility, index) => <p key={index}>{responsibility}</p>)
                }
            </ResponsibilitiesWrapper>
        </ExperienceBlockWrapper>
    )
}

export default ExperienceBlock
