import Navbar from '@/components/Layout/Navbar'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from './Footer'


const ContentWrapper = styled.div`
    padding: 3em 0 1em;
    display: grid;
    gap: 5em;

    main {
        display: grid;
        gap: 5em;
    }

    @media only screen and (max-width: 950px) {
        padding: 2em 0 1em;
        gap: 3em;
    }
`

const ReturnButton = styled.button<{scrolled: boolean}>`
    display: grid;
    place-content: center;
    position: fixed;
    bottom: 5em;
    right: ${props => props.scrolled ? '2.5em' : '-7em'};
    background: white;
    border: 1px solid var(--border-primary);
    border-radius: 32px;
    min-height: 6em;
    min-width: 6em;
    aspect-ratio: 1;
    filter: drop-shadow(2px 2px 2px hsla(0, 0%, 0%, 0.05));
    transition: all 0.4s ease-in-out;
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
