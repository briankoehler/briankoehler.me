import Navbar from '@/components/Layout/Navbar'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from './Footer'


const ContentWrapper = styled.div`
    padding: 3em 0 1em;
    display: grid;
    gap: var(--page-gap);

    main {
        display: grid;
        gap: inherit;
    }

    @media only screen and (max-width: 950px) {
        padding: 2em 0 1em;
        gap: calc(var(--page-gap) * (3 / 5));
    }
`

const ReturnButton = styled.button<{ scrolled: boolean }>`
    display: grid;
    place-content: center;
    position: fixed;
    bottom: 5em;
    right: ${props => props.scrolled ? '2.5em' : '-7em'};
    background: white;
    border: 1px solid var(--border-primary);
    border-radius: 128px;
    min-height: 6em;
    aspect-ratio: 1;
    filter: drop-shadow(2px 2px 2px hsla(0, 0%, 0%, 0.05));
    cursor: pointer;
    transition: right 0.4s ease-in-out, bottom 0.1s ease-in-out, min-height 0.1s ease-in-out, transform 0.1s ease-in-out;

    :active {
        bottom: 4em;
    }

    :hover {
        min-height: 7em;
        transform: translateY(0.5em) translateX(0.5em);
    }
`

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => setScrolled(window.pageYOffset > 100))
    })

    /* Scroll up function */
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <ContentWrapper>
            <Navbar />
            <main>
                {children}
                <ReturnButton onClick={scrollToTop} scrolled={scrolled}>
                    <FaLongArrowAltUp size='4em' />
                </ReturnButton>
            </main>
            <Footer />
        </ContentWrapper>
    )
}

export default Layout
