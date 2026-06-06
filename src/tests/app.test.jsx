import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CastChip from "../components/CastChip";
import CastList from "../components/CastList";
import App from "../App";
import { FavoritesProvider } from "../FavoritesContext";
import { MemoryRouter } from "react-router-dom";

// unit test 1
describe("CastChip", () => {
  it("renders the name", () => {
    render(<CastChip name="Leonardo DiCaprio" />);
    expect(screen.getByText("Leonardo DiCaprio")).toBeTruthy();
  });
});

// unit test 2
describe("CastList", () => {
  it("renders all cast names", () => {
    render(<CastList cast={["Tom Hanks", "Meryl Streep"]} />);
    expect(screen.getByText("Tom Hanks")).toBeTruthy();
    expect(screen.getByText("Meryl Streep")).toBeTruthy();
  });
});

// integration test
describe("Search", () => {
  it("filters movies when user types", () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("Search movies...");
    fireEvent.change(input, { target: { value: "zzzzz" } });
    expect(screen.queryByText("zzzzz")).toBeNull();
  });
});