import styled from 'styled-components'


const PositionBlockWrapper = styled.button<{ onClick: (key: number) => void }>`
    cursor: pointer;
    border: none;
    background: none;
    display: grid;
    place-content: center;
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    padding: var(--box-padding);
    font-size: var(--font-medium);
    font-family: 'Rubik';
    font-size: var(--font-large);
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
        width: 100%;
        padding: 1em 0.25em;

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
