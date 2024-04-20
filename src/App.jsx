import './App.css'
import SearchQueryForm from './components/SearchForm/SearchForm'
import PhotoCard from './components/PhotoCard/PhotoCard';
import usePhotoSearch from './utils/usePhotoSearch';

function App() {
  const {
    photos,
    query,
    setQuery,
    searchPhotos,
    incrementPage,
    canSearch,
    hasNoResults
  } = usePhotoSearch({
    perPage: 24 // update image per page
  });

  return (
    <>
      <h1 className="text-2xl font-bold underline text-blue-900">Search Images</h1>
      <SearchQueryForm
        query={query}
        setQuery={setQuery}
        searchPhotos={searchPhotos}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {photos.map((photo)=>
          <PhotoCard
            key={photo.id}
            photo={photo}
          />
        )}
      </div>
      {hasNoResults && <h2>No Results</h2>}
      {canSearch && (
      <button
        onClick={incrementPage}
        className="border-b-2 p-3 mt-2.5 text-gray-100 hover:bg-blue-700 bg-blue-900 rounded-full"
      >
        Load More Results
      </button>
      )}
    </>
  )
}

export default App
