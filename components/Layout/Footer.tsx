import { FaRegPaperPlane } from 'react-icons/fa'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
	color: var(--font-secondary);
	display: flex;
    align-items: center;
    font-weight: 400;
    justify-content: space-between;
    min-width: 100%;
	
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
					<a href='mailto:briandkoehler@gmail.com'><FaRegPaperPlane size='1.5em' /></a>
				</li>
				<li>
					<a href='https://github.com/briankoehler'><SiGithub size='1.5em' /></a>
				</li>
				<li>
					<a href='https://instagram.com/koehlerexpress'><SiInstagram size='1.5em' /></a>
				</li>
				<li>
					<a href='https://linkedin.com/in/briandkoehler'><SiLinkedin size='1.5em' /></a>
				</li>
			</ul>
		</FooterWrapper>
	)
}

export default Footer
