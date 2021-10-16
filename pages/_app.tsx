import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import styled from 'styled-components'


const AppWrapper = styled.div`
    display: grid;
    gap: var(--page-gap);
`

function MyApp({ Component, pageProps, router }: AppProps) {
    const url = `https://briankoehler.me${router.route}`

    return (
        <AppWrapper>
            <Navbar />

            <AnimatePresence exitBeforeEnter>
                <Component key={url} {...pageProps} />
            </AnimatePresence>

            <Footer />
        </AppWrapper>
    )
}

export default MyApp
