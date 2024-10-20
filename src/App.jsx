// src/App.jsx
import './App.css'

import { index, search } from "./services/starshipService"
import { useState, useEffect } from "react"

import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

const App = () => {
  const [starships, setStarships] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getStarships() {
      setLoading(true)
      const response = await index()
      if (response) {
        setStarships(response)
      }
      setLoading(false)
    }
    getStarships();
  }, [])

  const findStarships = async (searchTerm) => {
    const data = await search(searchTerm);
    setStarships(data)
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch search={searchTerm => findStarships(searchTerm)} />
      <h2>Starships</h2>
      <p>Number of  results: { starships.length }</p>
      {
        loading
          ? <p>Loading...</p>
          : <StarshipList
              starships={starships}
              searchTerm={searchTerm}
            />
      }
    </main>
  )
}

export default App