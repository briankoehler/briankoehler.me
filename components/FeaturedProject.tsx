import Image from 'next/image'
import styled from 'styled-components'


const FeaturedProjectWrapper = styled.section`
    display: grid;
    gap: 1.5em;

    a {
        filter: drop-shadow(2px 2px 8px hsla(0, 0%, 0%, 0.25));
        position: relative;

        :active {
            position: relative;
            top: 2px;
        }

        ::after {
            content: '';
            position: absolute;
            inset: 0;
            background: hsla(0, 0%, 100%, 0.2);
            transition: background 0.2s;
        }

        :hover::after {
            background: none;
        }
    }

    .image {
        border-radius: 8px;

        :hover {
            
        }
    }
`

const FeaturedProjectTitle = styled.h2`
    color: var(--font-primary);
    font-weight: normal;
    font-size: 1.5rem;
    font-weight: 600;
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

const FeaturedProject = ({featuredProject}: Props) => {
    return (
        <FeaturedProjectWrapper>
            <FeaturedProjectTitle>Featured Project</FeaturedProjectTitle>
            <a href={featuredProject.link}>
                <Image className='image' src={`http://localhost:8082${featuredProject.cover.url}`} width={featuredProject.cover.width} height={featuredProject.cover.height} priority />
            </a>
        </FeaturedProjectWrapper>
    )
}

export default FeaturedProject
