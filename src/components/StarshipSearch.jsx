// `src/components/StarshipSearch.jsx`
import { useState } from 'react'

const StarshipSearch = (props) => {
  const [search, setSearchTerm] = useState("")
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(search);
    setSearchTerm('');
  }
  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Term:</label>
        <input
          id="search"
          name="search"
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
};

export default StarshipSearch;
