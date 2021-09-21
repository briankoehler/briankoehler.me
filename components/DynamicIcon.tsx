import { DiSqllite } from 'react-icons/di'
import { SiAmazonaws, SiBootstrap, SiCss3, SiDjango, SiNextDotJs, SiPython, SiReact } from 'react-icons/si'


type DynamicIconProps = {
    name: string,
    size: string
}

const DynamicIcon = ({ name, size }: DynamicIconProps) => {
    return (
        {
            'SiNextDotJs': <SiNextDotJs size={size} />,
            'SiReact': <SiReact size={size} />,
            'SiAmazonaws': <SiAmazonaws size={size} />,
            'SiCss3': <SiCss3 size={size} />,
            'SiPython': <SiPython size={size} />,
            'SiDjango': <SiDjango size={size} />,
            'SiBootstrap': <SiBootstrap size={size} />,
            'DiSqllite': <DiSqllite size={size} />
        }[name] || <></>
    )
}

export default DynamicIcon
