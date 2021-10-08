import styled from 'styled-components'


const TechBlockWrapper = styled.figure`
	align-items: center;
	aspect-ratio: calc(8 / 7.5);
	border-radius: 4px;
	border: 1px solid var(--border-primary);
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0;
	padding: 0.5em;
	width: 8em;

	.tech-icon {
		font-size: 4em;
	}

	@media only screen and (max-width: 950px) {
		width: 6em;
		
		.tech-icon {
			font-size: 3em;
		}
	}
`

type TechBlockProps = {
	name: string,
	icon: React.ReactNode,
}

const TechBlock = ({ name, icon }: TechBlockProps) => {
	return (
		<TechBlockWrapper>
			{icon}
			<p>{name}</p>
		</TechBlockWrapper>
	)
}

export default TechBlock