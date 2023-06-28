import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generarId } from "./helpers/generarId";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {
    page,
    pokemons = [],
    isLoading,
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(1));
  }, []);

  return (
    <div className="container">
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={generarId()}>{name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        Next
      </button>
    </div>
  );
};
