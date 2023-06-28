import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export const HomePage = () => {
  const { User, setUser } = useContext(UserContext);

  return (
    <>
      <h1>HomePage {User?.name}</h1>
      <pre>{JSON.stringify(User, null, 3)}</pre>
      <button onClick={() => setUser({ id: 123, name: "Junior" })}>
        Set Value
      </button>
    </>
  );
};
