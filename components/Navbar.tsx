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

const NavItem = styled.li`
    transition: all 0.2s;
`

const Navbar = () => {
    return (
        <NavWrapper>
            <Link href='/'>
                <a>Brian Koehler</a>
            </Link>
            <NavLinks>
                <NavItem>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='/posts'>
                        <a>Posts</a>
                    </Link>
                </NavItem>
            </NavLinks>
        </NavWrapper>
    )
}

export default Navbar
