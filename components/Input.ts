import styled from 'styled-components'


const InputField = styled.input`
	font-family: inherit;
	outline: none;
	border: 1px solid var(--border-primary);
	border-radius: 4px;
	font-size: var(--font-medium);
	padding: 0.5em;
    -webkit-appearance: none;

	:focus, :active {
		padding-bottom: calc(0.5em - 0.5px);
		padding-top: calc(0.5em - 0.5px);
		border-bottom: 2px solid var(--font-accent);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`

export default InputField
