import Link from 'next/link'
import styled from 'styled-components'


const GreetingWrapper = styled.section`
    display: grid;
    gap: 1.5em;
`

const BigHello = styled.h1`
    color: var(--font-primary);
    font-size: 3rem;
    font-weight: 600;
`

const ShortAbout = styled.p`
    color: var(--font-secondary);
    font-size: 1.125rem;
    line-height: 150%;
`

const Greeting = () => {
    return (
        <GreetingWrapper>
            <BigHello>I'm Brian, software engineer.</BigHello>
            <ShortAbout>
                Welcome to my website! I’m a developer studying at the University of Florida with a strong 
                interest in all things web development. <a href='https://github.com/briankoehler/' className='blue'>Glance over my GitHub</a>, 
                or <Link href='/posts/'><a className='orange'>peruse some posts</a></Link> for some nonsensical thoughts.
            </ShortAbout>
        </GreetingWrapper>
    )
}

export default Greeting
