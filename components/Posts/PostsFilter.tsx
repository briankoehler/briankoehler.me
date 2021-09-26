import { Tag } from '@/components/types'
import { useContext } from 'react'
import styled from 'styled-components'
import { PostsFilterContext } from './PostsFilterContext'


const PostsFilterWrapper = styled.div`

`

const SelectTagsWrapper = styled.div`
	display: flex;
	gap: var(--medium-list-gap);
	flex-wrap: wrap;
`

const TagButton = styled.button<{ selected: boolean }>`
	outline: none;
	border: ${props => props.selected ? '1px solid transparent' : '1px solid var(--border-primary)'};
	border-radius: 4px;
	background: ${props => props.selected ? 'var(--font-primary)' : 'none'};
	color: ${props => props.selected ? 'white' : 'var(--font-secondary)'};
	padding: 0.25em;
	max-width: max-content;
	cursor: pointer;
	transition: all 0.2s;
`

type PostsFilterProps = {
	className?: string,
	tags: Tag[]
}

const PostsFilter = ({ className, tags }: PostsFilterProps) => {
	/* Filter Context */
	const { filter, setFilter, selectedTags, toggleTag } = useContext(PostsFilterContext)

	return (
		<PostsFilterWrapper className={className}>
			<input value={filter} onChange={(e) => setFilter(e.target.value)} />

			<SelectTagsWrapper>
				{
					tags.map((tag: Tag, index: number) => <TagButton key={index} onClick={() => toggleTag(tag)} selected={selectedTags.includes(tag)}>#{tag.name}</TagButton>)
				}
			</SelectTagsWrapper>
		</PostsFilterWrapper>
	)
}

export default PostsFilter
