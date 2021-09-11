
export type Post = {
    id: number,
    title: string,
    description: string,
    date: string,
    // slug: string,
    // writing: string,
    // published_at: string,
    // created_at: string,
    // updated_at: string
}

export type Responsibility = {
    id: number,
    value: string
}

export type Experience = {
    id: number,
    company: string,
    position: string,
    period: string,
    url: string,
    responsibilities: Responsibility[]
}