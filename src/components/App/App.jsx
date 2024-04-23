import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { fetchImages } from "../../image-api"
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { Toaster } from 'react-hot-toast';
import Loader from "../Loader/Loader";
import Error from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("")
  
  const handleSearch = (newQuery) => {
     setQuery(newQuery);
     setPage(1);
     setImages([]);
  };
    
  const handleLoadMore = () => {
    setPage(page + 1)
  };
  
  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true)
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data]
        })
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getImages();

  }, [page, query]);

  return <>
    <SearchBar onSearch={handleSearch} />
    {error && <Error/>}
    {images.length > 0 && <ImageGallery items={images} />}
    {isLoading && <Loader/>}
    {images.length > 0 && !isLoading && <LoadMoreButton onClick={handleLoadMore} />}
    <Toaster />
  </>
}


