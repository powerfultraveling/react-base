interface Props {
  image: {
    id: string;
    url: string;
  };
}

function ImageCard({ image }: Props) {
  return <img className="mb-2 rounded-md" src={image.url} />;
}

export default ImageCard;
