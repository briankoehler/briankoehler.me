import { ChildrenProp, ClassProp } from '@/components/types'
import React from 'react'
import styled from 'styled-components'



const HeadingWrapper = styled.section`
    align-content: center;
    display: grid;
    gap: var(--subheading-gap);
`

const BigHello = styled.h1`
    color: var(--font-primary);
    font-size: clamp(2.25rem, 8vw, 3rem);
    font-weight: 600;
`

const ShortAbout = styled.p`
    color: var(--font-secondary);
    font-size: var(--font-large);
    line-height: 150%;
`

type HeadingProps = {
    bigText: string,
    littleText: (string | React.ReactNode)[] | string,
}

const Heading = ({ className, bigText, littleText, children }: HeadingProps & ClassProp & ChildrenProp) => {
    return (
        <HeadingWrapper className={className}>
            <BigHello>{bigText}</BigHello>
            <ShortAbout>{littleText}</ShortAbout>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
