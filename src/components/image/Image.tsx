import { StyledImage } from './image.styled'

interface ImageProps {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, height, width, style }) => {
    return <StyledImage src={src} alt={alt} height={height} width={width} style={style} />;
};

export default Image;