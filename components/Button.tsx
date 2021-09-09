import Link from 'next/link'
import styled from 'styled-components'


const ButtonWrapper = styled.a`
	background: var(--font-primary);
	color: white;
	padding: 0.5em 1ch;
	border-radius: 8px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	text-align: center;
	max-width: 8em;
	font-weight: 500;
	font-size: 1.125rem;
	transition: background 0.2s;

	:active {
		position: relative;
		top: 2px;
	}

	:hover {
		background: hsl(0, 0%, 16.07843137254902%);
	}
`

type Props = {
	href: string,
	children: React.ReactNode
}

const Button = (props: Props) => {
	return (
		<Link href={props.href}>
			<ButtonWrapper>{props.children}</ButtonWrapper>
		</Link>
	)
}

export default Button
