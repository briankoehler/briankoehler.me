import ExperienceBlock from '@/components/Experience/ExperienceBlock'
import SelectedPosition from '@/components/Experience/SelectedPosition'
import Subheading from '@/components/Subheading'
import { useState } from 'react'
import styled from 'styled-components'
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

const data = [
    {
        company: 'Tresata',
        position: 'Data Engineer Intern',
        responsibilities: [
            'Facilitated ESG investigations via web and PDF data extraction with Python',
            'Improved productivity by means of Scala data cleaning and utilization of HDFS and AWS S3',
            'Located future points of interest after writing bash scripts for profiling and visualization software'
        ],
        period: 'June 2021 – August 2021',
        url: 'https://tresata.com/'
    },
    {
        company: 'v3 Cybersecurity',
        position: 'Web Developer Intern',
        responsibilities: [
            'Amplified site traffic by modernizing WordPress website alongside CEO',
            'Boosted revenue by implementing ROI calculator to indicate 33% guaranteed cost avoidance',
            'Increased visitation through scraped data from 2 news sources by designing PHP web scraper'
        ],
        period: 'May 2020 – August 2020',
        url: 'https://v3cybersecurity.com/'
    },
    {
        company: 'NLP Logix',
        position: 'Data Engineer Intern',
        responsibilities: [
            'Investigated correlation between low-income regions and property crimes',
            `Generated regression models in R language with sheriff's data secured using SQL`,
            'Highlighted troubled regions at City Hall using mapped data and charts constructed in Tableau'
        ],
        period: 'June 2017 – July 2017',
        url: 'https://www.nlplogix.com/'
    }
]

const Experience = () => {
    const [activeBlock, setActiveBlock] = useState(0)

    return (
        <ExperiencesWrapper id='experience'>
            <Subheading>Experience</Subheading>
            <InfoWrapper>
                <PositionsWrapper>
                    {
                        data.map((experience, index) => <PositionBlock key={index} company={experience.company} current={index === activeBlock} onClick={() => setActiveBlock(index)}>{experience.position}</PositionBlock>)
                    }
                    <SelectedPosition width='100%' height={`calc((100% - ${(data.length - 1) * 0.5}em) / ${data.length})`} top={`calc((((100% - ${(data.length - 1) * 0.5}em) / ${data.length}) + 0.5em) * ${activeBlock})`} />
                </PositionsWrapper>
                <ExperienceBlock {...data[activeBlock]} />
            </InfoWrapper>
        </ExperiencesWrapper>
    )
}

export default Experience
