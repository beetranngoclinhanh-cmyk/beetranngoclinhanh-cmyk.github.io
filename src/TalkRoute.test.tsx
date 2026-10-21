import { afterEach, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});
it.each(["#/talks/nus-cs", "#/journal/old-post", "#unknown"])(
  "keeps Linh Anh’s portfolio at an inherited or unknown hash: %s",
  (hash) => {
    window.history.replaceState(null, "", hash);
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Linh Anh",
    );
    expect(screen.queryByTestId("talk-page")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("portfolio-style-select"),
    ).not.toBeInTheDocument();
  },
);
