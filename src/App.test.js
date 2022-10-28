import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page and check if film database on screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Michelle Pfeiffer/i);
  expect(linkElement).toBeInTheDocument();
});

// test("click on Actors link and check page is rendered", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Michelle Pfeiffer/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("click on Actors link and check page is rendered", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Michelle Pfeiffer/i);
//   expect(linkElement).toBeInTheDocument();
// });
