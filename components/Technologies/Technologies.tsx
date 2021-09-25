import Subheading from '@/components/Subheading'
import TechBlock from '@/components/Technologies/TechBlock'
import { ReactNode } from 'react'
import { SiCss3, SiGithub, SiHtml5, SiJavascript, SiNextDotJs, SiPython, SiReact } from 'react-icons/si'
import styled from 'styled-components'


const TechnologiesWrapper = styled.section`
	display: grid;
	gap: var(--subheading-gap);
`

const BlocksWrapper = styled.ul`
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(auto-fit, 8em);
	gap: var(--medium-list-gap);
	padding: 0;
	margin: 0;

	li {
		list-style: none;
	}

	@media only screen and (max-width: 950px) {
		grid-template-columns: repeat(auto-fit, 6em);
	}
`

interface TechData {
	name: string,
	icon: ReactNode
}

const data: TechData[] = [
	{ name: 'JavaScript', icon: <SiJavascript className='tech-icon' /> },
	{ name: 'Python', icon: <SiPython className='tech-icon' /> },
	{ name: 'ReactJS', icon: <SiReact className='tech-icon' /> },
	{ name: 'Next.js', icon: <SiNextDotJs className='tech-icon' /> },
	{ name: 'Git(Hub)', icon: <SiGithub className='tech-icon' /> },
	{ name: 'HTML', icon: <SiHtml5 className='tech-icon' /> },
	{ name: 'CSS', icon: <SiCss3 className='tech-icon' /> },
]

const Technologies = () => {
	return (
		<TechnologiesWrapper>
			<Subheading>Technologies</Subheading>
			<BlocksWrapper>
				{
					data.map((tech: { name: string, icon: ReactNode }, index: number) => <li key={index}><TechBlock name={tech.name} icon={tech.icon} /></li>)
				}
			</BlocksWrapper>
		</TechnologiesWrapper>
	)
}

export default Technologies
