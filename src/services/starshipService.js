const BASE_URL = 'http://swapi.dev/api/starships'

export const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log('Error: ', error)
  }
}

export const search = async (searchTerm) => {
  try {
    const queryString = `/?search=${searchTerm}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log('Error: ', error)
  }
};
