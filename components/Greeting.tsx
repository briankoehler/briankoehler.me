import styled from 'styled-components'


const GreetingWrapper = styled.div`
    display: grid;
    gap: 1.5em;
`

const BigHello = styled.h1`
    color: var(--primary-color);
    font-size: 3rem;
    font-weight: 600;
`

const ShortAbout = styled.p`
    font-size: 1.125rem;
    line-height: 150%;
`

const Greeting = () => {
    return (
        <GreetingWrapper>
            <BigHello>I'm Brian, software engineer.</BigHello>
            <ShortAbout>
                Welcome to my website! I’m a developer studying at the University of Florida with a strong 
                interest in all things web development. Glance over my GitHub, or peruse my posts for some 
                nonsensical thoughts.
            </ShortAbout>
        </GreetingWrapper>
    )
}

export default Greeting
