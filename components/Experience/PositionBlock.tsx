import styled from 'styled-components'


const PositionBlockWrapper = styled.button<{ onClick: (key: number) => void }>`
    cursor: pointer;
    border: none;
    background: none;
    display: grid;
    place-content: center;
    border: 2px solid #f3f3f3;
    border-radius: 8px;
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

type Props = {
    company: string,
    children: React.ReactNode,
    current: boolean,
    onClick: () => void
}

const PositionBlock = ({ company, children, onClick }: Props) => {
    return (
        <PositionBlockWrapper onClick={onClick}>
            <p>{children + ' '}<span className='company'>@{company}</span></p>
        </PositionBlockWrapper>
    )
}

export default PositionBlock
