import Subheading from '@/components/Subheading'
import { ClassProp } from '@/components/types'
import ViewMore from '@/components/ViewMore'
import Image from 'next/image'
import styled from 'styled-components'


const FeaturedProjectWrapper = styled.section`
    display: grid;
    gap: var(--subheading-gap);
    grid-template-rows: max-content auto;

    .project-image {
        filter: drop-shadow(2px 2px 3px hsla(0, 0%, 0%, 0.25));
    }
`

const FeaturedProjectHeading = styled.div`
    align-items: center;
    display: flex;
    gap: 1em;
`

type FeaturedProjectProps = {
    featuredProject: {
        link: string,
        cover: {
            width: number,
            height: number,
            url: string
        }
    },
    url: string
}

const FeaturedProject = ({ className, featuredProject, url }: FeaturedProjectProps & ClassProp) => {
    return (
        <FeaturedProjectWrapper className={className}>
            <FeaturedProjectHeading>
                <Subheading>Featured Project</Subheading>
                <ViewMore href='/projects' />
            </FeaturedProjectHeading>

            <a className='project-image' href={featuredProject.link}>
                <Image className='image' alt='Image of featured project' src={`http://${url}${featuredProject.cover.url}`} width={featuredProject.cover.width} height={featuredProject.cover.height} priority />
            </a>
        </FeaturedProjectWrapper>
    )
}

export default FeaturedProject
