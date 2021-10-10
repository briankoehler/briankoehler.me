import { ChildrenProp } from '@/components/types'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import styled, { css } from 'styled-components'


const buttonStyles = css`
	align-items: center;
	background: var(--font-primary);
	border-radius: 4px;
	color: white;
	cursor: pointer;
	display: flex;
	font-size: var(--font-large);
	font-weight: 500;
	height: max-content;
	justify-content: center;
	padding: 0.75em 1em;
	position: relative;
	transition: all 0.2s;
	user-select: none;
	width: max-content;
	
	:active {
		position: relative;
		top: 2px;
	}
	
	:hover {
		padding-left: 2.5em;

		div {
			left: 0.75em;
			margin: 0;
			opacity: 1;
			padding: 0;
		}
	}

	@media only screen and (max-width: 950px) {
		padding-left: 2.5em;

		div {
			left: 0.75em;
			margin: 0;
			opacity: 1;
			padding: 0;
		}
	}
`

const IconWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	left: 1em;
	opacity: 0;
	position: absolute;
	transition: all 0.2s ease-in-out;
`

const LinkButtonWrapper = styled.a`${buttonStyles}`
const InteractionButtonWrapper = styled.button`
	${buttonStyles}
	border: none;
	font-family: inherit;
`

type LinkButtonProps = {
	href: string,
	icon?: ReactNode
}

export const LinkButton = ({ href, icon, children }: LinkButtonProps & ChildrenProp) => {
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
