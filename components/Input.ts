import styled from 'styled-components'


const InputField = styled.input`
	font-family: inherit;
	outline: none;
	border: 1px solid var(--border-primary);
	border-radius: 4px;
	font-size: var(--font-medium);
	padding: 0.5em;
    -webkit-appearance: none;
	transition: border 0.2s;

	:focus {
		border: 1px solid var(--font-secondary);
	}
`

export default InputField
