import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useReducer } from 'react'
import styled from 'styled-components'


const NavWrapper = styled(motion.header)`
    align-items: center;
    display: flex;
    font-size: var(--font-large);
    font-weight: 400;
    justify-content: space-between;
    min-width: 100%;
`

const NavLinks = styled.ol<{ open: boolean }>`
    display: grid;
    gap: 2em;
    grid-auto-flow: column;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li:nth-child(1) {
        display: none;

        @media only screen and (max-width: 950px) {
            display: block;
        }
    }

    @media only screen and (max-width: 950px) {
        align-content: center;
        background: white;
        clip-path: circle(${props => props.open ? '200' : '0'}% at 100% 0);
        grid-auto-flow: row;
        left: 0;
        min-height: 100vh;
        min-width: 100vw;
        padding: 0 1em;
        pointer-events: ${props => !props.open && 'none'};
        position: absolute;
        top: 0;
        transition: clip-path 0.5s;
        z-index: 2;

        li {
            font-size: 3rem;
        }
    }
`

const MenuToggle = styled.button<{ open: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    display: grid;
    gap: 0.3em;
    padding: 0;
    z-index: 2;

    span {
        background: var(--font-primary);
        border-radius: 4px;
        display: block;
        height: 0.4em;
        transition: all 0.2s ease-in-out;
    }

    span:nth-child(1) {
        transform: ${props => props.open && 'rotate(45deg) translateX(0.35rem)'};
        width: 3em;
    }

    span:nth-child(2) {
        display: ${props => props.open && 'none'};
        transform: translateX(calc(3em - 2em));
        width: 2em;
    }

    span:nth-child(3) {
        transform: ${props => props.open && 'rotate(-45deg) translateX(0.35rem)'};
        width: 3em;
    }

    @media only screen and (min-width: 950px) {
        display: none;
    }
`

const variants = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, type: 'spring', stiffness: 200 } }
}

const Navbar = () => {
    /* States */
    const [open, toggleOpen] = useReducer((state) => state === true ? false : true, false)

    /* Prevent scrolling when open */
    useEffect(() => {
        document.body.style.overflowY = open ? 'hidden' : 'scroll'
    }, [open])

    /* Avoid toggling mobile nav menu, and re-enable scrolling if necessary */
    const handleNavSelection = () => {
        if (window.innerWidth <= 950) {
            toggleOpen()
            return
        }
        document.body.style.overflow = 'scroll'
    }

    return (
        <NavWrapper variants={variants} initial='hidden' animate='show'>
            <AnimatePresence>
                {/* Left-side name */}
                <Link href='/'>
                    <motion.a className='underline' variants={variants}>Brian Koehler</motion.a>
                </Link>

                {/* Right-side list of links */}
                <nav>
                    <NavLinks open={open}>
                        <motion.li variants={variants}>
                            <Link href='/'>
                                <a className='underline' onClick={handleNavSelection}>Home</a>
                            </Link>
                        </motion.li>
                        <motion.li variants={variants}>
                            <Link href='/about'>
                                <a className='underline' onClick={handleNavSelection}>About</a>
                            </Link>
                        </motion.li>
                        <motion.li variants={variants}>
                            <Link href='/projects'>
                                <a className='underline' onClick={handleNavSelection}>Projects</a>
                            </Link>
                        </motion.li>
                        <motion.li variants={variants}>
                            <Link href='/posts'>
                                <a className='underline' onClick={handleNavSelection}>Posts</a>
                            </Link>
                        </motion.li>
                    </NavLinks>
                </nav>

                {/* Toggle Menu */}
                <MenuToggle open={open} onClick={toggleOpen}>
                    <span />
                    <span />
                    <span />
                </MenuToggle>
            </AnimatePresence>
        </NavWrapper >
    )
}

export default Navbar
