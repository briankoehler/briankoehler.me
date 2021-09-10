import Subtitle from '@/components/Subtitle'
import Image from 'next/image'
import styled from 'styled-components'


const FeaturedProjectWrapper = styled.section`
    display: grid;
    gap: 1.5em;
    grid-template-rows: min-content auto;

    a {
        filter: drop-shadow(2px 2px 8px hsla(0, 0%, 0%, 0.25));
    }

    .image {
        border-radius: 8px;
    }
`

type Props = {
    featuredProject: {
        link: string,
        cover: {
            width: number,
            height: number,
            url: string
        }
    }
}

const FeaturedProject = ({ featuredProject }: Props) => {
    return (
        <FeaturedProjectWrapper>
            <Subtitle>Featured Project</Subtitle>
            <a href={featuredProject.link}>
                <Image className='image' alt='Image of featured project' src={`http://localhost:8082${featuredProject.cover.url}`} width={featuredProject.cover.width} height={featuredProject.cover.height} priority />
            </a>
        </FeaturedProjectWrapper>
    )
}

export default FeaturedProject
