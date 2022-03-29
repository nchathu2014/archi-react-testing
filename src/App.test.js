import { render, screen, fireEvent } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import App from "./App";
//import Search from "./components/robinwieruch-examples/search";

describe("Test <App/>", () => {
  test("render <App/> component", async () => {
    render(<App />);
    //screen.debug();
    //useEvent.type(screen.getByRole("textbox"), "Nuwan");

    //expect(screen.getByText(/Searches for Nuwan/)).toBeInTheDocument();
    //screen.debug();
    /* screen.debug();
    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "JavaScript",
      },
    });
    screen.debug();

    expect(screen.getByText("Searches for JavaScript")).toBeInTheDocument(); */

    /* expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
     */

    // screen.queryByText(//)

    //expect(screen.getByRole("textbox")).toBeInTheDocument();

    //expect(screen.queryByText("/Searches for JavaScript/")).toBeNull();

    /**
     * SEARCH BY ROLE
     */

    /*  
    SEARCH BY TEXT
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByText("Searches for ...")).toBeInTheDocument(); */
  });
});

/* describe("<Search/> component", () => {
  test("Redering Search component", () => {
    const handleChange = jest.fn();

    render(
      <Search value="" onChange={handleChange}>
        Search:
      </Search>
    );

    expect(screen.getByText("Search:")).toBeInTheDocument();
    useEvent.type(screen.getByRole("textbox"), "JavaScript");

    expect(handleChange).toHaveBeenCalledTimes(10);
  });
}); */
