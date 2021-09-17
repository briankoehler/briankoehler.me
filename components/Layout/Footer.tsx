import { SiGithub, SiLinkedin } from 'react-icons/si'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
	display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    font-weight: 400;
	color: var(--font-secondary);
	
	ul {
		display: flex;
		gap: 0.5em;
	}
	
	li {
		list-style: none;
		transition: color 0.2s;

		:hover {
			color: var(--font-primary);
		}
	}
`

const Footer = () => {
	return (
		<FooterWrapper>
			<p>Made with Next.js and Strapi.</p>
			<ul>
				<li>
					<a href='https://github.com/briankoehler'><SiGithub size='1.5em' /></a>
				</li>
				<li>
					<a href='https://linkedin.com/in/briandkoehler'><SiLinkedin size='1.5em' /></a>
				</li>
			</ul>
		</FooterWrapper>
	)
}

export default Footer
