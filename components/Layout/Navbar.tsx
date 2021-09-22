import Link from 'next/link'
import { useReducer } from 'react'
import styled from 'styled-components'


const NavWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    font-weight: 400;
    font-size: var(--font-large);
`

const NavLinks = styled.ol<{ left: string }>`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    list-style-type: none;
    margin: 0;

    @media only screen and (max-width: 950px) {
        background: white;
        grid-auto-flow: row;
        place-content: center;
        position: absolute;
        top: 0;
        left: ${props => props.left};
        min-width: 100vw;
        min-height: 100vh;
        transition: left 0.2s;
    }
`

const MenuToggle = styled.button<{open: boolean}>`
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
        transition: all 0.1s ease-in-out;
    }

    span:nth-child(1) {
        width: 3em;
        transform: ${props => props.open && 'rotate(45deg) translateX(0.42rem)'};
    }

    span:nth-child(2) {
        display: ${props => props.open && 'none'};
        width: 2em;
        transform: translateX(calc(3em - 2em));
    }

    span:nth-child(3) {
        width: 3em;
        transform: ${props => props.open && 'rotate(-45deg) translateX(0.42rem)'};
    }

    @media only screen and (min-width: 950px) {
        display: none;
    }
`

const Navbar = () => {
    const [left, toggleLeft] = useReducer((state) => state === '100vw' ? '0' : '100vw', '100vw')
    const [open, toggleOpen] = useReducer((state) => state === true ? false : true, false)

    const toggleMobileMenu = () => {
        toggleLeft()
        toggleOpen()
    }

    return (
        <NavWrapper>
            {/* Left-side name */}
            <Link href='/'>
                <a className='underline'>Brian Koehler</a>
            </Link>

            {/* Right-side list of links */}
            <NavLinks left={left}>
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
            <MenuToggle open={open} onClick={toggleMobileMenu}>
                <span />
                <span />
                <span />
            </MenuToggle>

        </NavWrapper>
    )
}

export default Navbar
