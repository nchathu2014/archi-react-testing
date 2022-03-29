import {
  render,
  fireEvent,
  wait,
  findByTestId,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SimpleAPIForm from "./example";
import * as APIService from "./api";

jest.mock("./api");
APIService.getData = jest.fn();

describe("Test <SimpleAPIForm/>", () => {
  const { getByLabelText, getByTestId, getByText } = render(<SimpleAPIForm />);

  //const messageDiv = findByTestId("message");

  //mock the API

  test("Render <SimpleAPIForm/>", () => {
    const lblBody = getByLabelText(/Body:/);
    const txtEmail = getByTestId("email");
    const btnSubmit = getByText("Post");

    expect(lblBody).toBeInTheDocument();
    expect(txtEmail).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();

    //screen.debug();
  });

  test("Button Click and call API", async () => {
    APIService.getData.mockResolvedValueOnce({ ok: true });

    render(<SimpleAPIForm />);
    const txtEmail = getByTestId("email");
    const btnSubmit = getByText("Post");

    expect(screen.queryByText(/posted successfully/)).toBeNull();

    userEvent.type(txtEmail, "sample title");
    userEvent.click(btnSubmit);

    expect(APIService.getData).toHaveBeenCalledTimes(1);
    expect(APIService.getData).toHaveBeenCalledWith("sample title");
    expect(await screen.findByText(/posted successfully/)).toBeInTheDocument();
    //    / await wait(() => null);
  });
});
