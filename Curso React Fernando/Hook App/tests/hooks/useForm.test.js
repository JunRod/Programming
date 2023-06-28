import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe("Purbeas en useForm", () => {
  const initialForm = {
    name: "Junior",
    email: "juniormen.12321@gmail.com",
  };

  test("Debe de cambiar el nombre del formulario", async () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
    });

    expect(result.current.name).toBe("Juan");
    expect(result.current.formState.name).toBe("Juan");
  });

  test("Debe de cambiar el nombre del formulario", async () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onInputReset } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
      onInputReset();
    });

    expect(result.current.name).toBe("Junior");
    expect(result.current.formState.name).toBe("Junior");
  });
});
