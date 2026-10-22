import { render, screen } from "@testing-library/react";
import SeptemberLine from "@/app/birthdayline/page";
import useRequestInfo from "@/hooks/useRequestInfo";

jest.mock("@/hooks/useRequestInfo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@/app/birthdayline/Formulario", () => ({
  __esModule: true,
  default: () => <div data-testid="septemberline-formulario">Formulario</div>,
}));

jest.mock("@/app/birthdayline/Resultado", () => ({
  __esModule: true,
  default: () => <div data-testid="septemberline-resultado">Resultado</div>,
}));

describe("Página Septemberline", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("muestra el formulario mientras está cargando", () => {
    (useRequestInfo as jest.Mock).mockReturnValue({
      cargando: true,
      resultado: false,
    });

    render(<SeptemberLine />);

    expect(screen.getByTestId("septemberline-formulario")).toBeInTheDocument();
    expect(
      screen.queryByTestId("septemberline-resultado"),
    ).not.toBeInTheDocument();
  });

  it("muestra el resultado cuando terminó de cargar y hay resultado", () => {
    (useRequestInfo as jest.Mock).mockReturnValue({
      cargando: false,
      resultado: true,
    });

    render(<SeptemberLine />);

    expect(screen.getByTestId("septemberline-resultado")).toBeInTheDocument();
    expect(
      screen.queryByTestId("septemberline-formulario"),
    ).not.toBeInTheDocument();
  });

  it("no muestra formulario ni resultado cuando no carga y no hay resultado", () => {
    (useRequestInfo as jest.Mock).mockReturnValue({
      cargando: false,
      resultado: false,
    });

    render(<SeptemberLine />);

    expect(
      screen.queryByTestId("septemberline-formulario"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("septemberline-resultado"),
    ).not.toBeInTheDocument();
  });
});