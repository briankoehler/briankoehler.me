import styled from 'styled-components'


const TechBlockWrapper = styled.figure`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #e7e7e7;
	border-radius: 4px;
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