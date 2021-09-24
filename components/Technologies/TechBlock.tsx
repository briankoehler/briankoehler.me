import styled from 'styled-components'


const TechBlockWrapper = styled.figure`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--border-primary);
	border-radius: 4px;
	padding: 0.5em;
	width: 8em;
	aspect-ratio: calc(8 / 7.5);
	margin: 0;

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