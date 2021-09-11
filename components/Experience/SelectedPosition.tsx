import styled from 'styled-components'


const SelectedPositionWrapper = styled.div<Props>`
	width: ${props => props.width};
	height: ${props => props.height};
	border: 2px solid var(--font-primary);
	border-radius: 8px;
	position: absolute;
	top: ${props => props.top};
	transition: top 0.2s;
`

type Props = {
	width: string,
	height: string,
	top: string
}

const SelectedPosition = (props: Props) => {
	return (
		<SelectedPositionWrapper {...props}>
		</SelectedPositionWrapper>
	)
}

export default SelectedPosition
