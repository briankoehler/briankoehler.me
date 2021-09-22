import styled from 'styled-components'


const HeadingWrapper = styled.section`
    display: grid;
    gap: 1.5em;
    align-content: center;
`

const BigHello = styled.h1`
    color: var(--font-primary);
    font-size: 3rem;
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
    children?: React.ReactNode
}

const Heading = ({ bigText, littleText, children }: HeadingProps) => {
    return (
        <HeadingWrapper>
            <BigHello>{bigText}</BigHello>
            <ShortAbout>{littleText}</ShortAbout>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
