import { render, screen, cleanup, wait } from "@testing-library/react";

import AxiosMock from "axios";
import TestAxios from "./test-axios";

describe("Mock Async with Axios", () => {
  afterEach(cleanup);

  test("Async Axios Request", async () => {
    AxiosMock.get.mockResolvedValue({ data: { title: "some title" } });
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const { getByText, getByTestId } = render(<TestAxios url={url} />);

    expect(getByText(/Loading.../).textContent).toBe(/Loading.../);
    const resolveElement = await wait(() => getByTestId("title"));

    expect(resolveElement.textContent).toBe("some title");
    expect(AxiosMock.get).toHaveBeenCalledTimes(1);
    expect(AxiosMock.get).toHaveBeenCalledWith(url);

    screen.debug();
  });
});
