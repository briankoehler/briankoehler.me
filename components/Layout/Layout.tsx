import { ChildrenProp } from '@/components/types'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import styled from 'styled-components'


const ContentWrapper = styled(motion.main)`
    column-gap: calc(var(--page-gap) * (5 / 7));
    display: grid;
    row-gap: var(--page-gap);

    @media only screen and (max-width: 950px) {
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

const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'linear', stiffness: 500 } },
    exit: { opacity: 0, y: -10, transition: { type: 'linear', stiffness: 500 } }
}

const Layout = ({ children }: ChildrenProp) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => setScrolled(window.pageYOffset > 100))
    })

    /* Scroll up function */
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <ContentWrapper variants={variants} initial='hidden' animate='show' exit='exit'>
            {children}
            <ReturnButton onClick={scrollToTop} scrolled={scrolled}>
                <FaLongArrowAltUp size='4em' />
            </ReturnButton>
        </ContentWrapper>
    )
}

export default Layout
