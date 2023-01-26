import React, { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

test("Renders correct title", () => {
  render(<App />);
  const linkElement = screen.getByText("Testing in React", {exact: true});
  expect(linkElement).toBeInTheDocument();
});

test("Renders correctly", () => {
  const rendered = renderer.create(<App />)

  expect(rendered).toMatchSnapshot()
})