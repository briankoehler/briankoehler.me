import Link from 'next/link'
import { useEffect, useReducer } from 'react'
import styled from 'styled-components'


const NavWrapper = styled.header`
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
            <nav>
                <NavLinks open={open}>
                    <li>
                        <Link href='/'>
                            <a className='underline'>Home</a>
                        </Link>
                    </li>
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
            </nav>

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
