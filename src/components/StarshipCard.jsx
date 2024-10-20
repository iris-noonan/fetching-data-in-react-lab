// `src/components/StarshipCard.jsx`
const StarshipCard = (props) => {
  const { ship, index } = props
  return (
    <li className="card" key={index}>
      <h3>{ship.name}</h3>
      <p>Class: {ship.starship_class}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Model: {ship.model}</p>
    </li>
  )
};

export default StarshipCard;
