import { InteractionButton } from '@/components/Button'
import InputField from '@/components/Input'
import styled from 'styled-components'


const ContactFormWrapper = styled.form`
	display: grid;
	gap: var(--medium-list-gap);
	border: 1px solid var(--border-primary);
	border-radius: 4px;
	padding: var(--box-padding);
	width: 100%;

	fieldset {
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5em;
		border: none;
	}
`

const TextAreaField = styled.textarea`
	resize: none;
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

const ContactForm = () => {
	return (
		<ContactFormWrapper id='contact' action='https://formspree.io/f/xzbyogyq' method='POST'>
			<fieldset>
				<label htmlFor='name'>Name</label>
				<InputField id='name' type='text' name='name' placeholder='Jane Doe' required />
			</fieldset>

			<fieldset>
				<label htmlFor='email'>Email Address</label>
				<InputField id='email' type='email' name='email' placeholder='janedoe@example.com' required />
			</fieldset>

			<fieldset>
				<label htmlFor='message'>Message</label>
				<TextAreaField id='message' name='message' placeholder={`Cool stuff! Let's collab 🤙`} required />
			</fieldset>

			<InteractionButton type='submit'>Send</InteractionButton>
		</ContactFormWrapper>
	)
}

export default ContactForm
