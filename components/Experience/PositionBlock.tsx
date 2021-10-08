import styled from 'styled-components'


const PositionBlockWrapper = styled.button<{ onClick: (key: number) => void }>`
    background: none;
    border-radius: 4px;
    border: 1px solid var(--border-primary);
    cursor: pointer;
    display: grid;
    font-family: 'Rubik';
    font-size: var(--font-large);
    font-size: var(--font-medium);
    padding: var(--box-padding);
    place-content: center;
    transition: box-shadow 0.2s;

    :hover {
        box-shadow: 2px 2px 3px hsla(0, 0%, 0%, 0.05);
    }

    .company {
        color: var(--font-secondary);
        font-size: var(--font-small);
        white-space: nowrap;
    }

    @media only screen and (max-width: 950px) {
        font-size: var(--font-medium);
        padding: 1em 0.25em;
        width: 100%;

        p:nth-child(1) {
            display: none;
        }

        .company {
            font-size: 0.7rem;
            color: var(--font-primary);
        }
    }
`

type PositionBlockProps = {
    company: string,
    children: React.ReactNode,
    current: boolean,
    onClick: () => void
}

const PositionBlock = ({ company, children, onClick }: PositionBlockProps) => {
    return (
        <PositionBlockWrapper onClick={onClick}>
            <p>{children}</p>
            <p className='company'>@{company}</p>
        </PositionBlockWrapper>
    )
}

export default PositionBlock
