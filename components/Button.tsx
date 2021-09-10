import Link from 'next/link'
import styled from 'styled-components'


const ButtonWrapper = styled.a`
	background: var(--font-primary);
	color: white;
	border-radius: 8px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	width: 8em;
	height: 2.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	font-size: 1.125rem;
	user-select: none;
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
