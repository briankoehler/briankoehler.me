import Navbar from '@/components/Layout/Navbar'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './Footer'


const ContentWrapper = styled.div`
    padding: 3em 0 1em;
    display: grid;
    gap: 5em;

    main {
        display: grid;
        gap: 5em;
    }

    @media only screen and (max-width: 950px) {
        padding: 2em 0 1em;
        gap: 3em;
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
            <Footer />
        </ContentWrapper>
    )
}

export default Layout
