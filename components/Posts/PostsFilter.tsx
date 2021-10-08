import InputField from '@/components/Input'
import Subheading from '@/components/Subheading'
import { Tag } from '@/components/types'
import { useContext } from 'react'
import styled from 'styled-components'
import { PostsFilterContext } from './PostsFilterContext'


const PostsFilterWrapper = styled.section`
	display: grid;
	gap: 1em;
	grid-template-rows: min-content min-content min-content;
`

const SelectTagsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
`

const TagButton = styled.button<{ selected: boolean }>`
	background: none;
	border-radius: 4px;
	border: ${props => props.selected ? '1px solid var(--font-accent)' : '1px solid var(--border-primary)'};
	color: ${props => props.selected ? 'var(--font-accent)' : 'var(--font-secondary)'};
	cursor: pointer;
	max-width: max-content;
	outline: none;
	padding: 0.25em;
	transition: all 0.05s ease-in-out;

	:hover {
		border: 1px solid var(--font-accent);
		color: var(--font-accent);
	}
`

type PostsFilterProps = {
	className?: string,
	tags: Tag[]
}

const PostsFilter = ({ className, tags }: PostsFilterProps) => {
	/* Filter Context */
	const { query, setQuery, selectedTags, toggleTag } = useContext(PostsFilterContext)

	return (
		<PostsFilterWrapper className={className}>
			<Subheading>Filter</Subheading>
			<InputField value={query} onChange={(e) => setQuery(e.target.value)} />

			<SelectTagsWrapper>
				{
					tags.sort((a: Tag, b: Tag) => a.name.localeCompare(b.name)).map((tag: Tag, index: number) => <TagButton key={index} onClick={() => toggleTag(tag)} selected={selectedTags.includes(tag)}>#{tag.name}</TagButton>)
				}
			</SelectTagsWrapper>
		</PostsFilterWrapper>
	)
}

export default PostsFilter
