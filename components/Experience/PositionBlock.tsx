import styled from 'styled-components'


const PositionBlockWrapper = styled.button<{current: boolean, onClick: (key: number) => void}>`
    cursor: pointer;
    border: none;
    background: none;
    display: grid;
    place-content: center;
    border: ${props => props.current ? '2px solid #f3f3f3' : ''};
    border-radius: 8px;
    padding: 1em;
    max-height: 3em;
    font-size: 1rem;
    font-family: 'Rubik';

    .company {
        color: var(--font-secondary);
        font-size: 0.75rem;
    }

    :hover {
        border: 2px solid #f3f3f3;
    }
`

type Props = {
    company: string,
    children: React.ReactNode,
    current: boolean,
    onClick: () => void
}

const PositionBlock = ({company, children, current, onClick}: Props) => {
    return (
        <PositionBlockWrapper onClick={onClick} current={current}>
            <p>{children + ' '}<span className='company'>@{company}</span></p>
        </PositionBlockWrapper>
    )
}

export default PositionBlock
