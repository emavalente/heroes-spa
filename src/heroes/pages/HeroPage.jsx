import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = getHeroById(id);

  const onGetBack = () => {
    navigate("/");
  };

  if (!hero) {
    // Podemos utilizar una navegación programada tanto con useNavigate como con el functional Component Navigate
    // return (
    //   <div className="container">
    //     <p className="text-center">Heroe no encontrado</p>
    //     <button className="btn btn-primary" onClick={onGetBack}>
    //       Volver
    //     </button>
    //   </div>
    // );

    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1>{hero.superhero}</h1>
      <hr />
    </div>
  );
};
