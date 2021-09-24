import styled from 'styled-components'


const HeadingWrapper = styled.section`
    display: grid;
    gap: var(--subheading-gap);
    align-content: center;
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
    className?: string,
    bigText: string,
    littleText: (string | React.ReactNode)[] | string,
    children?: React.ReactNode
}

const Heading = ({ className, bigText, littleText, children }: HeadingProps) => {
    return (
        <HeadingWrapper className={className}>
            <BigHello>{bigText}</BigHello>
            <ShortAbout>{littleText}</ShortAbout>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
