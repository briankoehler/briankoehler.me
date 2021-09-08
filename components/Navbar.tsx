import Link from 'next/link'
import styled from 'styled-components'


const NavWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    font-weight: bold;
    font-size: 1.125rem;
`

const NavLinks = styled.ol`
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    list-style-type: none;
`

const Navbar = () => {
    return (
        <NavWrapper>
            <Link href='/'>
                <a className='underline'>Brian Koehler</a>
            </Link>
            <NavLinks>
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
        </NavWrapper>
    )
}

export default Navbar
