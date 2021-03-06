import { ClassProp } from '@/components/types'
import Link from 'next/link'
import styled from 'styled-components'


const ViewMoreWrapper = styled.a`
	color: var(--font-secondary);
	cursor: pointer;
	display: flex;
	font-size: var(--font-small);
	gap: 0.5em;

	svg {
		transition: all 0.1s;
	}

	:hover {
		svg:nth-child(1) {
			margin-left: 0.3em;
		}
	}
`

type ViewMoreProps = {
	href: string
}

const ViewMore = ({ className, href }: ViewMoreProps & ClassProp) => {
	return (
		<Link href={href} passHref>
			<ViewMoreWrapper className={className}>
				<p>View More</p>
				<div>
					<svg height="0.75em" viewBox="0 0 52 92" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.4152 46.0002L2.01097 11.8065C0.722684 10.5054 0 8.74837 0 6.91737C0 5.08637 0.722684 3.32937 2.01097 2.02826C2.64359 1.38588 3.39766 0.875737 4.22929 0.527529C5.06092 0.17932 5.9535 0 6.85508 0C7.75667 0 8.64925 0.17932 9.48088 0.527529C10.3125 0.875737 11.0666 1.38588 11.6992 2.02826L49.9922 41.1011C51.2787 42.4052 52 44.1634 52 45.9952C52 47.8271 51.2787 49.5853 49.9922 50.8893L11.6992 89.9622C11.0666 90.6046 10.3125 91.1147 9.48088 91.4629C8.64925 91.8111 7.75667 91.9905 6.85508 91.9905C5.9535 91.9905 5.06092 91.8111 4.22929 91.4629C3.39766 91.1147 2.64359 90.6046 2.01097 89.9622C0.722684 88.6611 0 86.9041 0 85.0731C0 83.2421 0.722684 81.4851 2.01097 80.184L33.4152 46.0002Z" fill="var(--font-secondary)" />
					</svg>
					<svg height="0.75em" viewBox="0 0 52 92" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.4152 46.0002L2.01097 11.8065C0.722684 10.5054 0 8.74837 0 6.91737C0 5.08637 0.722684 3.32937 2.01097 2.02826C2.64359 1.38588 3.39766 0.875737 4.22929 0.527529C5.06092 0.17932 5.9535 0 6.85508 0C7.75667 0 8.64925 0.17932 9.48088 0.527529C10.3125 0.875737 11.0666 1.38588 11.6992 2.02826L49.9922 41.1011C51.2787 42.4052 52 44.1634 52 45.9952C52 47.8271 51.2787 49.5853 49.9922 50.8893L11.6992 89.9622C11.0666 90.6046 10.3125 91.1147 9.48088 91.4629C8.64925 91.8111 7.75667 91.9905 6.85508 91.9905C5.9535 91.9905 5.06092 91.8111 4.22929 91.4629C3.39766 91.1147 2.64359 90.6046 2.01097 89.9622C0.722684 88.6611 0 86.9041 0 85.0731C0 83.2421 0.722684 81.4851 2.01097 80.184L33.4152 46.0002Z" fill="var(--font-secondary)" />
					</svg>
				</div>
			</ViewMoreWrapper>
		</Link>
	)
}

export default ViewMore
