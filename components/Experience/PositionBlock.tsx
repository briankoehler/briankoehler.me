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

    .company {
        color: var(--font-secondary);
        font-size: var(--font-small);
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
