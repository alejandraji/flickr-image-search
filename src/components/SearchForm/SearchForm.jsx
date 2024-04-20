import MagnifyingGlass from '../../assets/MagnifyingGlass';
import '../../index.css';
import { PropTypes } from "prop-types";

const SearchForm = ({query, setQuery, searchPhotos}) => {
  const onSubmit = async (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
    searchPhotos();
  };

  const clearInput = () => setQuery("");

  return (
    <div className="flex justify-center  w-full">
      <form className="flex justify-center p-8 w-5/6 form-container rounded-full" onSubmit={onSubmit} method="post">
        <input
          type="text"
          name="search"
          className="sm:w-4/5 pl-3 rounded-l-full bg-gray-100 hover:bg-gray-200 h-9 focus:outline-none focus:border-sky-600 focus:ring-1"
          placeholder="Search images"
          value={query}
          onChange={handleChange}
          required
          />
          {query && <button onClick={clearInput} title="clear" className="text-stone-950 bg-gray-100 h-9 hover:bg-gray-200 pl-1 min-w-10 focus:outline-none focus:border-sky-600 focus:ring-1" type="reset">x</button>}
          <span className="text-gray-100 bg-blue-900 rounded-r-full h-9 p-1.5 min-w-10"><MagnifyingGlass/></span>
        </form>
    </div>
  )
}

SearchForm.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  searchPhotos:PropTypes.func
}

export default SearchForm;
