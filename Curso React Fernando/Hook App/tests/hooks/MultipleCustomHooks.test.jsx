import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/05-useEffect/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  // test("Debe de mostrar el componente por defecto y debe mostrar que el disable del boton inicialmente es true", () => {
  //   render(<MultipleCustomHooks />);

  //   expect(screen.getByText("Breaking Quotes"));
  //   expect(screen.getByText("Loading..."));
  //   const button = screen.getByRole("button", { name: "Next Quote" });

  //   expect(button.disabled).toBeFalsy();
  // });

  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Fernando")).toBeTruthy();
    expect(screen.getByText("Hola Mundo")).toBeTruthy();

    const button = screen.getByRole("button", { name: "Next Quote" });
    expect(button.disabled).toBeFalsy();

    fireEvent.click(button)
    expect(button).toHaveBeenCalledTimes(1)
  });
});
