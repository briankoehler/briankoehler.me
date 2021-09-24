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
`

interface TechData {
	name: string,
	icon: ReactNode
}

const data: TechData[] = [
	{ name: 'JavaScript', icon: <SiJavascript size='4em' /> },
	{ name: 'Python', icon: <SiPython size='4em' /> },
	{ name: 'ReactJS', icon: <SiReact size='4em' /> },
	{ name: 'Next.js', icon: <SiNextDotJs size='4em' /> },
	{ name: 'Git(Hub)', icon: <SiGithub size='4em' /> },
	{ name: 'HTML', icon: <SiHtml5 size='4em' /> },
	{ name: 'CSS', icon: <SiCss3 size='4em' /> },
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
