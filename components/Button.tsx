import { ChildrenProp } from '@/components/types'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import styled, { css } from 'styled-components'


const buttonStyles = css`
	align-items: center;
    border: none;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
    font-family: inherit;
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

const primaryButtonStyles = css`
    background: var(--font-primary);
    color: white;
`

const secondaryButtonStyles = css`
    background: white;
    border: 1px solid var(--font-primary);
    color: var(--font-primary);
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

const ButtonWrapper = styled.a<{level?: 'primary' | 'secondary'}>`
    ${buttonStyles}
    ${props => props.level === 'primary' ? primaryButtonStyles : secondaryButtonStyles}
`

type LinkButtonProps = {
	href: string,
	icon?: ReactNode,
    level?: 'primary' | 'secondary'
}

type InteractionButtonProps = {
    icon?: ReactNode,
    level?: 'primary' | 'secondary'
}

export const LinkButton = ({ href, icon, children, level }: LinkButtonProps & ChildrenProp) => {
	return (
		<Link href={href} passHref>
			<ButtonWrapper level={level}>
				<IconWrapper>{icon}</IconWrapper>
				{children}
			</ButtonWrapper>
		</Link>
	)
}

export const InteractionButton = ({ type, icon, children, level }: ComponentProps<'button'> & InteractionButtonProps) => {
	return (
		<ButtonWrapper type={type} level={level}>
			<IconWrapper>{icon}</IconWrapper>
			{children}
		</ButtonWrapper>
	)
}

LinkButton.defaultProps = {
    level: 'primary'
}

InteractionButton.defaultProps = {
    level: 'primary'
}
