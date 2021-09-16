import { ReactNode } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const ContentWrapper = styled.div`
    padding: 1em 0 0 0 ;
    display: grid;
    gap: 5em;
    transition: max-width 0.2s;

    main {
        display: grid;
        gap: 5em;
    }
`

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ContentWrapper>
            <Navbar />
            <main>
                {children}
            </main>
        </ContentWrapper>
    )
}

export default Layout
