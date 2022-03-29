import { render, screen } from "@testing-library/react";
import Example01 from "./example";

describe("Component <Example01/> Test", () => {
  test("Should Component Render", () => {
    render(<Example01 />);
    const linkElement = screen.getByText(/Learn React/);
    const imgElement_1 = screen.getByAltText(/logo/);
    const imgElement_2 = screen.getByAltText(/something/);

    expect(linkElement).toBeInTheDocument();
    expect(imgElement_1).toBeInTheDocument();
    expect(imgElement_2).toBeInTheDocument();

    screen.debug();
  });
});
