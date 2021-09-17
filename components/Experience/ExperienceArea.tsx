import ExperienceBlock from '@/components/Experience/ExperienceBlock'
import PositionBlock from '@/components/Experience/PositionBlock'
import Subheading from '@/components/Subheading'
import { Experience } from '@/components/types'
import { useState } from 'react'
import styled from 'styled-components'


const ExperiencesWrapper = styled.section`
	display: grid;
	gap: 1.5em;
`

const InfoWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 9fr 16fr;
    gap: 8em;
`

const PositionsWrapper = styled.div<{ height: string, top: string }>`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    position: relative;

    ::before {
        content: '';
        box-sizing: border-box;
        width: 100%;
        height: ${props => props.height};
        border: 1px solid var(--font-primary);
        border-radius: 4px;
        position: absolute;
        top: ${props => props.top};
        transition: top 0.2s;
    }
`

type ExperienceAreaProps = {
    experiences: Experience[]
}

const ExperienceArea = ({ experiences }: ExperienceAreaProps) => {
    const [activeBlock, setActiveBlock] = useState<number>(0)

    return (
        <ExperiencesWrapper>
            <Subheading>Experience</Subheading>
            <InfoWrapper>
                <PositionsWrapper height={`calc((100% - ${(experiences.length - 1) * 0.5}em) / ${experiences.length})`} top={`calc((((100% - ${(experiences.length - 1) * 0.5}em) / ${experiences.length}) + 0.5em) * ${activeBlock})`}>
                    {
                        experiences.map((experience: Experience, index: number) => <PositionBlock key={index} company={experience.company} current={index === activeBlock} onClick={() => setActiveBlock(index)}>{experience.position}</PositionBlock>)
                    }
                </PositionsWrapper>
                <ExperienceBlock {...experiences[activeBlock]} />
            </InfoWrapper>
        </ExperiencesWrapper>
    )
}

export default ExperienceArea
