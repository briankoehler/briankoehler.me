import styled from 'styled-components'


const TechBlockWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #f3f3f3;
	border-radius: 8px;
	padding: 1em;
`

type Props = {
	name: string
}

const TechBlock = ({ name }: Props) => {
	return (
		<TechBlockWrapper>
			{/* Icon */}
			<p>icon</p>
			<p>{name}</p>
		</TechBlockWrapper>
	)
}

export default TechBlock