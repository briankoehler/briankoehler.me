import Subtitle from '@/components/Subtitle'
import TechBlock from '@/components/Technologies/TechBlock'
import { SiCss3, SiGithub, SiHtml5, SiJavascript, SiNextDotJs, SiPython, SiReact } from 'react-icons/Si'
import styled from 'styled-components'


const TechnologiesWrapper = styled.div`
	display: grid;
	gap: 1.5em;
`

const BlocksWrapper = styled.ul`
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(auto-fit, 8em);
	gap: 1em;
	padding: 0;
	margin: 0;

	li {
		list-style: none;
	}
`

const data = [
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
			<Subtitle>Technologies</Subtitle>
			<BlocksWrapper>
				{
					data.map((tech, index) => <li key={index}><TechBlock name={tech.name} icon={tech.icon} /></li>)
				}
			</BlocksWrapper>
		</TechnologiesWrapper>
	)
}

export default Technologies
