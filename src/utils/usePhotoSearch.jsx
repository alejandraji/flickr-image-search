import { useState, useEffect } from 'react';
import postPhotoSearch from './postPhotoSearch';

const usePhotoSearch = ({perPage}) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchDelay, setSearchDelay] = useState(0);

  const searchPhotos = () => {
    setPage(1);
    setTotalPages(0);
    setPhotos([]);
    setErrorMessage(null);
    if (query.length > 0) {
      setSearchDelay(500);
      setShouldSearch(true);
    }
  }

  const incrementPage = () => {
    setPage(page +1);
    setSearchDelay(0);
    setShouldSearch(true);
  }

  const canSearch = totalPages > 1 && page < totalPages;

  const hasNoResults = query.length > 0 && photos.length === 0 && !isSearching;

  useEffect(() => {
    let ignore = false;
    const timeoutId = setTimeout(
      () => {
        // prevent API calls whenever state changes
        if (shouldSearch) {
          setIsSearching(true);
          postPhotoSearch(query, {page, perPage})
          .then(result => {
            if (!ignore) {
              setPhotos(photos.concat(result.photos));
              setTotalPages(result.totalPages);
              setShouldSearch(false);
              setIsSearching(false);
            }
          });
        }
      },
      searchDelay
    )
    return () => {
      ignore = true;
      clearTimeout(timeoutId)
    }
  },[query, page, shouldSearch, perPage, photos, searchDelay ])

  return {
    photos,
    query,
    setQuery,
    searchPhotos,
    incrementPage,
    isSearching,
    canSearch,
    errorMessage,
    hasNoResults
  }
}

export default usePhotoSearch;