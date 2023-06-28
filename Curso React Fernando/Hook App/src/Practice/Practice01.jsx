import { useFetch } from "./hooks/useFetch.js";
import { useForm } from "./hooks/useForm.js";
import { Input } from "./Components/Input";
import { Image } from "./Components/Image.jsx";

export const Practice01 = () => {
  const { handleInput, number } = useForm({
    number: 0,
  });

  const { isLoading, data } = useFetch(number);

  return (
    <>
      <h1>Breaking Bad</h1>
      <p>Escoga un número</p>
      <Input value={number} funcion={handleInput} name={"number"} />
      <p>{`IsLoading: ${isLoading}`}</p>
      {data && <Image data={data} />}
    </>
  );
};
