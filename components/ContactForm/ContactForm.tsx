import styled from 'styled-components'
import { InteractionButton } from '../Button'


const ContactFormWrapper = styled.form`
	display: grid;
	gap: 1.5em;
	border: 1px solid #e7e7e7;
	border-radius: 4px;
	padding: 0.5em;
	width: 33%;
`

const InputField = styled.input`
	font-family: inherit;
	outline: none;
	border: 1px solid #e7e7e7;
	border-radius: 4px;
	font-size: 1rem;
	padding: 0.5em;
	transition: border 0.2s;

	:focus {
		border: 1px solid var(--font-primary);
	}
`

const TextAreaField = styled.textarea`
	resize: none;
	font-family: inherit;
	outline: none;
	border: 1px solid #e7e7e7;
	border-radius: 4px;
	font-size: 1rem;
	padding: 0.5em;
	transition: border 0.2s;

	:focus {
		border: 1px solid var(--font-primary);
	}
`

const ContactForm = () => {
	return (
		<ContactFormWrapper id='contact' action='https://formspree.io/f/xzbyogyq' method='POST'>
			<label htmlFor='fullName'>Full Name</label>
			<InputField id='fullName' type='text' name='fullName' placeholder='Relheok Nairb' />

			<label htmlFor='email'>Email Address</label>
			<InputField id='email' type='email' name='email' placeholder='ilove@briankoehler.me' />

			<label htmlFor='message'>Message</label>
			<TextAreaField id='message' name='message' placeholder={`Cool stuff! Let's collab 🤙`} />

			<InteractionButton type='submit'>Send</InteractionButton>
		</ContactFormWrapper>
	)
}

export default ContactForm
