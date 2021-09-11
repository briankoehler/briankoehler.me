import ExperienceBlock from '@/components/Experience/ExperienceBlock'
import SelectedPosition from '@/components/Experience/SelectedPosition'
import Subheading from '@/components/Subheading'
import { useState } from 'react'
import styled from 'styled-components'
import { Experience } from '../types'
import PositionBlock from './PositionBlock'


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

const PositionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    position: relative;
`

type Props = {
    experiences: Experience[]
}

const ExperienceArea = ({ experiences }: Props) => {
    const [activeBlock, setActiveBlock] = useState(0)

    return (
        <ExperiencesWrapper>
            <Subheading>Experience</Subheading>
            <InfoWrapper>
                <PositionsWrapper>
                    {
                        experiences.map((experience: Experience, index: number) => <PositionBlock key={index} company={experience.company} current={index === activeBlock} onClick={() => setActiveBlock(index)}>{experience.position}</PositionBlock>)
                    }
                    <SelectedPosition width='100%' height={`calc((100% - ${(experiences.length - 1) * 0.5}em) / ${experiences.length})`} top={`calc((((100% - ${(experiences.length - 1) * 0.5}em) / ${experiences.length}) + 0.5em) * ${activeBlock})`} />
                </PositionsWrapper>
                <ExperienceBlock {...experiences[activeBlock]} />
            </InfoWrapper>
        </ExperiencesWrapper>
    )
}

export default ExperienceArea
