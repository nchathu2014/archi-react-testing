import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Example04 from "./example";

describe("Test <Example04/>", () => {
  beforeEach(() => {
    render(<Example04 />);
  });

  test("Render <Example04/>", () => {
    const h1Ele = screen.getByText(/Welcome/);
    const lblName = screen.getByLabelText(/Name:/);
    const lblAge = screen.getByLabelText(/Age:/);
    const txtName = screen.getByTestId("name");
    const txtAge = screen.getByTestId("age");
    const btnSubmit = screen.getByRole("button");

    expect(h1Ele).toBeInTheDocument();
    expect(lblName).toBeInTheDocument();
    expect(lblAge).toBeInTheDocument();
    expect(txtName).toBeInTheDocument();
    expect(txtAge).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
    expect(lblAge).toHaveAttribute("type", "number");
    expect(btnSubmit).toHaveAttribute("type", "submit");

    //screen.debug();
  });

  test("Should Update the title with the Name", () => {
    const h1Ele = screen.getByText(/Welcome/);
    const txtName = screen.getByTestId("name");

    screen.debug();
    userEvent.type(txtName, "Nuwan");
    expect(h1Ele).toHaveTextContent(/Welcome Nuwan/);

    screen.debug();
  });

  test("Should Disable the submit button", () => {
    const txtName = screen.getByTestId("name");
    const lblAge = screen.getByLabelText(/Age:/);
    const btnSubmit = screen.getByRole("button");

    userEvent.type(txtName, "");
    expect(btnSubmit).toHaveAttribute("disabled");

    screen.debug();
  });

  test("Should Enable the submit button", () => {
    const txtName = screen.getByTestId("name");
    const lblAge = screen.getByLabelText(/Age:/);
    const btnSubmit = screen.getByRole("button");

    userEvent.type(txtName, "Nuwan");
    expect(btnSubmit).not.toHaveAttribute("disabled");

    screen.debug();
  });
});
