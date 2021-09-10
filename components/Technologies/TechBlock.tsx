import styled from 'styled-components'


const TechBlockWrapper = styled.figure`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #f3f3f3;
	border-radius: 8px;
	padding: 0.5em;
	width: 8em;
	height: 7.5em;
	margin: 0;
`

type Props = {
	name: string,
	icon: React.ReactNode,
}

const TechBlock = ({ name, icon }: Props) => {
	return (
		<TechBlockWrapper>
			{icon}
			<p>{name}</p>
		</TechBlockWrapper>
	)
}

export default TechBlock