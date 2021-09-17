import styled from 'styled-components'


const PositionBlockWrapper = styled.button<{ onClick: (key: number) => void }>`
    cursor: pointer;
    border: none;
    background: none;
    display: grid;
    place-content: center;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    padding: 1em;
    font-size: 1rem;
    font-family: 'Rubik';
    font-size: 1.125rem;

    .company {
        color: var(--font-secondary);
        font-size: 0.75rem;
        white-space: nowrap;
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
