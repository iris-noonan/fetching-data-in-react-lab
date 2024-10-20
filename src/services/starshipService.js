const BASE_URL = 'http://swapi.dev/api'

export const index = async () => {
  try {
    console.log('FIND')
    const res = await fetch(BASE_URL + '/starships')
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log('Error: ', error)
  }
}

