import ImageCard from "./ImageCard";
import type { Image } from "../../libs/types";

interface Props {
  images: Image[];
}

function ImageList({ images }: Props) {
  const imageCards = images.map((image) => <ImageCard image={image} />);

  return <div className="columns-2 md:columns-3 px-10">{imageCards}</div>;
}

export default ImageList;
