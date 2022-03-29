import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Example02 from "./example";

describe("Component <Example02/> Test", () => {
  beforeEach(() => {
    render(<Example02 />);
  });

  test("Should Component Render", () => {
    const btnElement = screen.getByText(/Current theme/);
    screen.debug();
    expect(btnElement).toBeInTheDocument();
  });

  test("Click one time", () => {
    const btnElement = screen.getByText(/Current theme/);
    screen.debug();

    userEvent.click(btnElement);
    expect(btnElement).toHaveTextContent(/dark/);
    screen.debug();
  });

  test("Click multiple timea", () => {
    const btnElement = screen.getByText(/Current theme/);
    screen.debug();

    userEvent.click(btnElement);
    userEvent.click(btnElement);
    userEvent.click(btnElement);

    expect(btnElement).toHaveTextContent(/dark/);
    screen.debug();
  });
});
