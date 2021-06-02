import React from "react";
import Header from "../components/Header";
import { render, fireEvent } from "@testing-library/react";
import { isCompositeComponent } from "react-dom/test-utils";
import { faItalic } from "@fortawesome/free-solid-svg-icons";

test("Should start with dropdown closed", () => {
  const header = render(<Header />);
  const dropdown = header.queryByTestId("dropdown");
  console.log(dropdown);
  expect(dropdown).toBe(null);
}); //it() does the same thing as test

it("Should open the dropdown when icon is clicked", () => {
  const header = render(<Header />);
  const hamburger = header.queryByTestId("hamburger-button");
  fireEvent.click(hamburger);
  // fireEvent.change(input, {target: {value: 'user-text'}})
  const dropdown = header.queryByTestId("dropdown");
  expect(dropdown).not.toBe(null);
});
