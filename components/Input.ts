import styled from 'styled-components'


const InputField = styled.input`
	border-radius: 4px;
	border: 1px solid var(--border-primary);
	font-family: inherit;
	font-size: var(--font-medium);
	outline: none;
	padding: 0.5em;
    -webkit-appearance: none;

	:focus, :active {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: 2px solid var(--font-accent);
		padding-bottom: calc(0.5em - 0.5px);
		padding-top: calc(0.5em - 0.5px);
	}
`

export default InputField
