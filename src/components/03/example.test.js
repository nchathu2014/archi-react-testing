import { getByTestId, render, screen } from "@testing-library/react";
import Example03 from "./example";

describe("Test <Example03/>", () => {
  test("Render <Example03/>", () => {
    render(<Example03 />);
    const element = screen.getByTestId("custom-element");
    const delElement = screen.getByTitle("Delete");
    const closeElement = screen.getByTitle("Close");
    const imgElement = screen.getByAltText("Incredibles 2 Poster");
    const anchorElement = screen.getByText(/About/);
    const dialogElement = screen.getByRole("dialog");

    expect(element).toBeInTheDocument();
    expect(delElement).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(anchorElement).toBeInTheDocument();
    expect(dialogElement).toBeInTheDocument();

    screen.debug();
  });
});
