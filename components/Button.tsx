import Link from 'next/link'
import styled from 'styled-components'


const ButtonWrapper = styled.a`
	background: var(--font-primary);
	color: white;
	border-radius: 4px;
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
		background: hsl(0, 0%, 21.176470588235293%);
	}
`

type ButtonProps = {
	href: string,
	children: React.ReactNode
}

const Button = ({ href, children }: ButtonProps) => {
	return (
		<Link href={href} passHref>
			<ButtonWrapper>{children}</ButtonWrapper>
		</Link>
	)
}

export default Button
