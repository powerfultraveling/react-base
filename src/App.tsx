import { useState, useMemo } from "react";

import SearchForm from "./components/SearchImage/SearchForm";
import ImageList from "./components/SearchImage/ImageList";

import fetchImage from "./libs/support/fetchImage";

function App() {
  const [images, setImages] = useState([]);
  const normalizedImages = useMemo(() => {
    return images.map(({ id, urls }) => ({ id, url: urls.small }));
  }, [images]);

  async function searchImage(term: string) {
    const images = await fetchImage(term);

    console.log("image", images.results);

    setImages(images.results);
  }
  return (
    <div className="py-10">
      <div className="flex justify-center mb-10">
        <SearchForm handleSubmit={searchImage} />
      </div>
      <ImageList images={normalizedImages} />
    </div>
  );
}

export default App;
