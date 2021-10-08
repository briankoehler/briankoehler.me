import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    column-gap: calc(var(--page-gap) * (5 / 7));
    display: grid;
    padding: 3em 0 1em;
    row-gap: var(--page-gap);

    main {
        display: grid;
        gap: inherit;
    }

    @media only screen and (max-width: 950px) {
        padding: 2em 0 1em;
        row-gap: calc(var(--page-gap) * (3 / 5));
    }
`

const ReturnButton = styled.button<{ scrolled: boolean }>`
    aspect-ratio: 1;
    background: white;
    border-radius: 128px;
    border: 1px solid var(--border-primary);
    bottom: 5em;
    cursor: pointer;
    display: grid;
    min-height: 6em;
    place-content: center;
    position: fixed;
    right: ${props => props.scrolled ? '2.5em' : '-7em'};
    transition: right 0.3s ease-in-out, bottom 0.1s ease-in-out, min-height 0.1s ease-in-out, transform 0.1s ease-in-out;

    :active {
        bottom: 4.5em;
    }

    :hover {
        min-height: 6.5em;
        transform: translateY(0.25em) translateX(0.25em);
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
        <>
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
        </>
    )
}

export default Layout
