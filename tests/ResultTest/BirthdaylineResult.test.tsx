import { fireEvent, render, screen } from "@testing-library/react";
import Resultado from "@/app/septemberline/Resultado";
import useDownload from "@/hooks/useDownload";
import useRequestInfo from "@/hooks/useRequestInfo";

jest.mock("@/hooks/useDownload", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@/hooks/useRequestInfo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@/utils/Fonts", () => ({
  __esModule: true,
  michroma: { className: "michroma" },
}));

jest.mock("@/app/septemberline/ImageResult", () => ({
  __esModule: true,
  default: () => <div data-testid="septemberline-image-result" />,
}));

describe("Resultado Septemberline", () => {
  const mockHandleDownloadImage = jest.fn();
  const mockHandleResetContent = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useDownload as jest.Mock).mockReturnValue({
      handleDownloadImage: mockHandleDownloadImage,
    });
    (useRequestInfo as jest.Mock).mockReturnValue({
      handleResetContent: mockHandleResetContent,
    });
  });

  it("renderiza la imagen y los botones Download y Restart", () => {
    render(<Resultado />);

    expect(
      screen.getByTestId("septemberline-image-result"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Restart" })).toBeInTheDocument();
  });

  it("llama al manejador de descarga al pulsar Download", () => {
    render(<Resultado />);

    fireEvent.click(screen.getByRole("button", { name: "Download" }));

    expect(mockHandleDownloadImage).toHaveBeenCalledTimes(1);
  });

  it("llama al manejador de reinicio al pulsar Restart", () => {
    render(<Resultado />);

    fireEvent.click(screen.getByRole("button", { name: "Restart" }));

    expect(mockHandleResetContent).toHaveBeenCalledTimes(1);
  });
});