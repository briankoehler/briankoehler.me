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
    font-size: 1.125rem;
    line-height: 150%;
`

type Props = {
    bigText: string,
    littleText: (string | React.ReactNode)[] | string,
    children?: React.ReactNode
}

const Heading = ({ bigText, littleText, children }: Props) => {
    return (
        <HeadingWrapper>
            <BigHello>{bigText}</BigHello>
            <ShortAbout>{littleText}</ShortAbout>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
