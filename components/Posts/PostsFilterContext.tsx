import { Tag } from '@/components/types'
import { createContext, Dispatch, ReactNode, useReducer, useState } from 'react'


type PostsFilterContextType = {
	filter: string,
	setFilter: (filter: string) => void,
	selectedTags: Tag[],
	toggleTag: Dispatch<Tag>
}

export const PostsFilterContext = createContext<PostsFilterContextType>({} as PostsFilterContextType)

type PostsFilterProviderProps = {
	children: ReactNode
}

export const PostsFilterProvider = ({ children }: PostsFilterProviderProps) => {
	/* States */
	const [filter, setFilter] = useState<string>('')
	const [selectedTags, toggleTag] = useReducer((state: Tag[], tag: Tag) => {
		if (state.includes(tag)) {
			return state.filter(t => t !== tag)
		}
		return [...state, tag]
	}, [])

	return (
		<PostsFilterContext.Provider value={{ filter, setFilter, selectedTags, toggleTag }}>
			{children}
		</PostsFilterContext.Provider>
	)
}
