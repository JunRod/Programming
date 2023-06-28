import { useEffect, useState } from "react";

export const useFetch = (number) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getConection = async () => {
    setState({
        data: null,
        isLoading: true,
      });

    const resp = await fetch(
      `https://rickandmortyapi.com/api/character/${number}`
    );
    const data = await resp.json();

    const info = {
      image: data.image,
      name: data.name
    }

    setState({
      data: info,
      isLoading: false,
    });
  };

  useEffect(() => {
    getConection();
  }, [number]);

  return {
    ...state,
  };
};
