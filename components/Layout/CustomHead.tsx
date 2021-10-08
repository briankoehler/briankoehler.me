import Head from 'next/head'


type CustomHeadProps = {
	title: string,
	description: string,
	url: string
}

const CustomHead = ({ title, description, url }: CustomHeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<meta httpEquiv='x-ua-compatible' content='ie=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:site_name' content='Brian Koehler' />
			<meta property='og:image' content='https://briankoehler.me/public/portrait.webp' />
			<meta property='og:type' content='website' />
			<meta property='og:locale' content='en_US' />
			<link href={url} rel='canonical' />
		</Head>
	)
}

export default CustomHead