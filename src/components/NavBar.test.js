import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("renders NavBar and check if Application Name is there", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Film Database/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders NavBar and check if links 'Home', 'IMDb', 'Actors', 'Directors' and 'Stats' on screen", () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/IMDb/i)).toBeInTheDocument();
  expect(screen.getByText(/Actors/i)).toBeInTheDocument();
  expect(screen.getByText(/Directors/i)).toBeInTheDocument();
  expect(screen.getByText(/Stats/i)).toBeInTheDocument();
});
