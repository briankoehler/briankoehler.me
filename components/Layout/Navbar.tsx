import Link from 'next/link'
import { useEffect, useReducer } from 'react'
import styled from 'styled-components'


const NavWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    font-weight: 400;
    font-size: var(--font-large);
`

const NavLinks = styled.ol<{ open: boolean }>`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 950px) {
        background: white;
        grid-auto-flow: row;
        align-content: center;
        position: absolute;
        padding: 0 1em;
        min-width: 100vw;
        min-height: 100vh;
        top: 0;
        left: 0;
        z-index: 2;
        clip-path: circle(${props => props.open ? '200' : '0'}% at 100% 0);
        /* display: ${props => !props.open && 'none'}; */
        transition: clip-path 0.5s;

        li {
            font-size: 3rem;
        }
    }
`

const MenuToggle = styled.button<{ open: boolean }>`
    border: none;
    background: none;
    display: grid;
    gap: 0.3em;
    cursor: pointer;
    padding: 0;
    z-index: 2;

    span {
        display: block;
        height: 0.4em;
        background: var(--font-primary);
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
    }

    span:nth-child(1) {
        width: 3em;
        transform: ${props => props.open && 'rotate(45deg) translateX(0.35rem)'};
    }

    span:nth-child(2) {
        display: ${props => props.open && 'none'};
        width: 2em;
        transform: translateX(calc(3em - 2em));
    }

    span:nth-child(3) {
        width: 3em;
        transform: ${props => props.open && 'rotate(-45deg) translateX(0.35rem)'};
    }

    @media only screen and (min-width: 950px) {
        display: none;
    }
`

const Navbar = () => {
    /* States */
    const [open, toggleOpen] = useReducer((state) => state === true ? false : true, false)

    /* Prevent scrolling when open */
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'scroll'
    }, [open])

    return (
        <NavWrapper>
            {/* Left-side name */}
            <Link href='/'>
                <a className='underline'>Brian Koehler</a>
            </Link>

            {/* Right-side list of links */}
            <NavLinks open={open}>
                <li>
                    <Link href='/about'>
                        <a className='underline'>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <a className='underline'>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href='/posts'>
                        <a className='underline'>Posts</a>
                    </Link>
                </li>
            </NavLinks>

            {/* Toggle Menu */}
            <MenuToggle open={open} onClick={toggleOpen}>
                <span />
                <span />
                <span />
            </MenuToggle>

        </NavWrapper>
    )
}

export default Navbar
