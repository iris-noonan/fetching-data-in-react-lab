// `src/components/StarshipList.jsx`
import StarshipCard from './StarshipCard'

const StarshipList = (props) => {
  const { starships, searchTerm } = props
  let copyShips = [...starships]
  return (
    <section>
      <ul>
        {copyShips.map(function(ship, index) {
          return (
            <StarshipCard
              ship={ship}
              index={index}
              key={index}
            />
          )
        })}
      </ul>
    </section>
  )
};

export default StarshipList;
