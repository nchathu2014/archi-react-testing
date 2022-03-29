import Hello from "./hello";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testing <Hello/>", () => {
  test("Finding title", () => {
    const { getByText } = render(<Hello title="nuwan" />);
    expect(getByText("nuwan")).toBeInTheDocument("nuwan");
  });

  test("Finding count value with testid", () => {
    const { getByTestId } = render(<Hello title="nuwan" />);
    const button = getByTestId("button");
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent(1);
  });

  test("Finding count value with multiple clicks", () => {
    const { getByTestId } = render(<Hello title="nuwan" />);
    const button = getByTestId("button");
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent(3);
  });
});
