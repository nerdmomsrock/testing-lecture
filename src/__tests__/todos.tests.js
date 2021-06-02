import React from "react";
import { render, act } from "@testing-library/react";
import Todos from "../components/Todos";
import axios from "axios";

it("Should fetch data from api and map over data", async () => {
  jest.spyOn(axios, "get").mockImplementationOnce(() => {
    return Promise.resolve({
      data: [{ title: "test title" }],
    });
  });
  let todos;

  await act(async () => {
    todos = render(<Todos />);
  });
  const h2 = todos.container.querySelector("div h2");
  expect(h2.textContent).toBe("test title");
});
