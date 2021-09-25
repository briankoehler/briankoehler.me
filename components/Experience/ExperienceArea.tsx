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
    grid-template-columns: 9fr 3fr 18fr;
    grid-template-areas: 'positions . experience';
    gap: inherit;

    .positions-wrapper {
        grid-area: positions;
    }

    .experience-block {
        grid-area: experience;
    }

    @media only screen and (max-width: 950px) {
        grid-template-areas: 'positions' 'experience';
        grid-template-columns: 1fr;
    }
`

const PositionsWrapper = styled.div<{ experienceCount: number, activeBlock: number }>`
    display: flex;
    flex-direction: column;
    gap: var(--medium-list-gap);
    position: relative;

    ::before {
        content: '';
        box-sizing: border-box;
        width: 100%;
        height: calc((100% - ${props => props.experienceCount - 1} * var(--medium-list-gap)) / ${props => props.experienceCount});
        border: 1px solid var(--font-primary);
        border-radius: 4px;
        position: absolute;
        top: calc((((100% - ${props => props.experienceCount - 1} * var(--medium-list-gap)) / ${props => props.experienceCount}) + var(--medium-list-gap)) * ${props => props.activeBlock});
        transition: top 0.2s;
    }

    @media only screen and (max-width: 950px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        ::before {
            height: 100%;
            width: calc((100% - ${props => props.experienceCount - 1} * var(--medium-list-gap)) / ${props => props.experienceCount});
            left: calc((((100% - ${props => props.experienceCount - 1} * var(--medium-list-gap)) / ${props => props.experienceCount}) + var(--medium-list-gap)) * ${props => props.activeBlock});
            top: 0;
            transition: left 0.2s;
        }
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
                <PositionsWrapper className='positions-wrapper' experienceCount={experiences.length} activeBlock={activeBlock}>
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
