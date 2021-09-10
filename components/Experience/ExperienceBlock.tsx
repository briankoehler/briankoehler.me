import styled from 'styled-components'


const ExperienceBlockWrapper = styled.div`
    display: grid;
    gap: 1em;
    padding: 1em;
    border: 2px solid #f3f3f3;
    border-radius: 8px;
`

const ResponsibilitiesWrapper = styled.div`
    display: grid;
    gap: 0.5em;
`

const Responsibility = styled.p`
    
`

const Period = styled.p`
    color: var(--font-secondary);
    font-size: 0.75rem;
`

type Props = {
    responsibilities: string[],
    period: string
}

const ExperienceBlock = ({responsibilities, period}: Props) => {
    return (
        <ExperienceBlockWrapper>
            <ResponsibilitiesWrapper>
                {
                    responsibilities.map(responsibility => <Responsibility>{responsibility}</Responsibility>)
                }
            </ResponsibilitiesWrapper>
            <Period>{period}</Period>
        </ExperienceBlockWrapper>
    )
}

export default ExperienceBlock
