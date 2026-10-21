import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "../../src/app/septemberline/Formulario";
import useRequestInfo from "@/hooks/useRequestInfo";

jest.mock("@/utils/Fonts", () => ({
  __esModule: true,
  michroma: { className: "michroma" },
}));

jest.mock("@/hooks/useRequestInfo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

let submittedName = "";
const mockHandleNameH = jest.fn((event: { target: { value: string } }) => {
  submittedName = event.target.value;
});
const mockHandleSubmit = jest.fn();
const mockUsuarioGenerado = jest.fn();

describe("Formulario Septemberline", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    submittedName = "";
    (useRequestInfo as jest.Mock).mockReturnValue({
      usuario: { name: "", diseño: "" },
      handleNameH: mockHandleNameH,
      handleSubmit: mockHandleSubmit,
      usuarioGenerado: mockUsuarioGenerado,
      maxFromLimitH: 16,
      isMaxFromLimitReachedH: false,
      charCountFrom: 0,
    });
  });

  it("renderiza el texto de bienvenida y el formulario", () => {
    render(<Formulario />);
    expect(
      screen.getByText(/Enter your name to wish the Birthday-Line 2026/i),
    ).toBeInTheDocument();
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("muestra las opciones de Namjoon, Jungkook y Jimin", () => {
    render(<Formulario />);
    expect(screen.getByText("Namjoon")).toBeInTheDocument();
    expect(screen.getByText("Jungkook")).toBeInTheDocument();
    expect(screen.getByText("Jimin")).toBeInTheDocument();
  });

  it("envía el cambio del campo de nombre a su manejador", () => {
    render(<Formulario />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "ARMY" } });

    expect(mockHandleNameH).toHaveBeenCalled();
    expect(submittedName).toBe("ARMY");
  });
});
