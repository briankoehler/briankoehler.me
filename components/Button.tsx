import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import styled, { css } from 'styled-components'


const buttonStyles = css`
	background: var(--font-primary);
	color: white;
	border-radius: 4px;
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
	position: relative;
	transition: all 0.2s;
	
	:active {
		position: relative;
		top: 2px;
	}
	
	:hover {
		padding-left: 2.5em;

		div {
			margin: 0;
			padding: 0;
			left: 0.75em;
			opacity: 1;
		}
	}
`

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 1em;
	opacity: 0;
	transition: all 0.2s ease-in-out;
`

const LinkButtonWrapper = styled.a`${buttonStyles}`
const InteractionButtonWrapper = styled.button`
	${buttonStyles}
	font-family: inherit;
	border: none;
`

type LinkButtonProps = {
	href: string,
	icon?: ReactNode,
	children: ReactNode
}

export const LinkButton = ({ href, icon, children }: LinkButtonProps) => {
	return (
		<Link href={href} passHref>
			<LinkButtonWrapper>
				<IconWrapper>{icon}</IconWrapper>
				{children}
			</LinkButtonWrapper>
		</Link>
	)
}

export const InteractionButton = ({ type, icon, children }: ComponentProps<'button'> & { icon?: ReactNode }) => {
	return (
		<InteractionButtonWrapper type={type}>
			<IconWrapper>{icon}</IconWrapper>
			{children}
		</InteractionButtonWrapper>
	)
}
