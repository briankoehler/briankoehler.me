import ExperienceBlock from '@/components/Experience/ExperienceBlock'
import PositionBlock from '@/components/Experience/PositionBlock'
import Subheading from '@/components/Subheading'
import { Experience } from '@/components/types'
import { useState } from 'react'
import styled from 'styled-components'


const ExperiencesWrapper = styled.section`
	display: grid;
	gap: var(--subheading-gap);
`

const InfoWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 9fr 3fr 18fr;

    .positions-wrapper {
        grid-column: 1;
    }

    .experience-block {
        grid-column: 3;
    }
`

const PositionsWrapper = styled.div<{ height: string, top: string }>`
    display: flex;
    flex-direction: column;
    gap: var(--medium-list-gap);
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
                <PositionsWrapper className='positions-wrapper' height={`calc((100% - ${(experiences.length - 1)} * var(--medium-list-gap)) / ${experiences.length})`} top={`calc((((100% - ${(experiences.length - 1)} * var(--medium-list-gap)) / ${experiences.length}) + var(--medium-list-gap)) * ${activeBlock})`}>
                    {
                        experiences.map((experience: Experience, index: number) => <PositionBlock key={index} company={experience.company} current={index === activeBlock} onClick={() => setActiveBlock(index)}>{experience.position}</PositionBlock>)
                    }
                </PositionsWrapper>
                <ExperienceBlock className='experience-block' {...experiences[activeBlock]} />
            </InfoWrapper>
        </ExperiencesWrapper>
    )
}

export default ExperienceArea
