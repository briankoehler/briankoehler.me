import { InteractionButton } from '@/components/Button'
import InputField from '@/components/Input'
import { FaRegPaperPlane } from 'react-icons/fa'
import styled from 'styled-components'


const ContactFormWrapper = styled.form`
	border-radius: 4px;
	border: 1px solid var(--border-primary);
	display: grid;
	gap: var(--medium-list-gap);
	padding: var(--box-padding);
	width: 100%;

	fieldset {
		border: none;
		display: grid;
		gap: 0.5em;
		margin: 0;
		padding: 0;
	}
`

const TextAreaField = styled.textarea`
	border-radius: 4px;
	border: 1px solid var(--border-primary);
	font-family: inherit;
	font-size: var(--font-medium);
	outline: none;
	padding: 0.5em;
	resize: none;
    -webkit-appearance: none;

	:focus, :active {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: 2px solid var(--font-accent);
		padding-bottom: calc(0.5em - 0.5px);
		padding-top: calc(0.5em - 0.5px);
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

			<InteractionButton type='submit' icon={<FaRegPaperPlane size='1em' />}>Send</InteractionButton>
		</ContactFormWrapper>
	)
}

export default ContactForm
