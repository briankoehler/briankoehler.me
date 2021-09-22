import Link from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'


const buttonStyles = `
	background: var(--font-primary);
	color: white;
	border-radius: 4px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	width: max-content;
	height: max-content;
	padding: 0.75em 1em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	font-size: var(--font-large);
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

const LinkButtonWrapper = styled.a`${buttonStyles}`
const InteractionButtonWrapper = styled.button`
	${buttonStyles}
	font-family: inherit;
	border: none;
`

type LinkButtonProps = {
	href: string,
	children: React.ReactNode
}

export const LinkButton = ({ href, children }: LinkButtonProps) => {
	return (
		<Link href={href} passHref>
			<LinkButtonWrapper>{children}</LinkButtonWrapper>
		</Link>
	)
}

export const InteractionButton = ({ type, children }: ComponentProps<'button'>) => {
	return <InteractionButtonWrapper type={type} >{children}</InteractionButtonWrapper>
}
