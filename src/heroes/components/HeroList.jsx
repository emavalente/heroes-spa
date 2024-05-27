import { getHeroesByPublisher } from "../helpers/";
import { HeroItem } from "./HeroItem";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroItem key={hero.id} hero={hero} />
      ))}
    </ul>
  );
};
