import { useCounter, useFetch} from "../hooks";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

  const {increment, counter} = useCounter(1)

  const { data, hasError, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const {author, quote} = !!data && data[0]

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />

      {
        isLoading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) : (
          <Quote author={author} quote={quote}/>
        )
      }

      <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next Quote</button>
    </>

  );
};
