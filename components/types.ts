import { ReactNode } from 'react'

export interface Post {
    id: number,
    title: string,
    description: string,
    date: string,
    writing: string,
    slug: string,
    tags: Tag[]
    // writing: string,
    // published_at: string,
    // created_at: string,
    // updated_at: string
}

export interface Tag {
    id: number,
    name: string
}

export interface Responsibility {
    id: number,
    value: string
}

export interface Experience {
    id: number,
    company: string,
    position: string,
    period: string,
    url: string,
    responsibilities: Responsibility[]
}

export interface Project {
    id: number,
    name: string,
    description: string,
    stack: string[],
    github?: string,
    link?: string,
    image: {
        width: number,
        height: number,
        url: string
    }
}

export type ClassProp = {
    className?: string
}

export type ChildrenProp = {
    children?: ReactNode
}
