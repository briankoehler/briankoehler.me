import Link from 'next/link'
import { useReducer } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import styled from 'styled-components'


const NavWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    font-weight: 400;
    font-size: var(--font-large);

    .burger {
        display: none;

        @media only screen and (max-width: 950px) {
            display: block;
        }
    }
`

const NavLinks = styled.ol<{ left: string }>`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    list-style-type: none;

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

const Navbar = () => {
    const [left, toggleLeft] = useReducer((state) => state === '100vw' ? '0' : '100vw', '100vw')

    return (
        <NavWrapper>
            <Link href='/'>
                <a className='underline'>Brian Koehler</a>
            </Link>

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

            <CgMenuRight className='burger' size='2em' onClick={toggleLeft} />
        </NavWrapper>
    )
}

export default Navbar
