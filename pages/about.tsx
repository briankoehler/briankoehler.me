import Experience from '@/components/Experience/Experience'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Technologies from '@/components/Technologies/Technologies'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    padding: 1em 0 0 0 ;
    display: grid;
    gap: 5em;
    transition: max-width 0.2s;

    main {
        display: grid;
        gap: 5em;
    }
`

const AboutPage = () => {
	return (
		<ContentWrapper>
			<Navbar />
			<main>
				<Heading bigText='Get to know me.' littleText='The one-stop shop to find anything about me from my experience, to my favorite technologies, and even what I enjoy doing.' />
				<Technologies />
                <Experience />
			</main>
		</ContentWrapper>
	)
}

export default AboutPage
