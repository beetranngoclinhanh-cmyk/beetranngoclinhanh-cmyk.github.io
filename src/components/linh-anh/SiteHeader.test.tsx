import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import SiteHeader from "./SiteHeader";
afterEach(cleanup);
it("opens and closes the mobile disclosure and restores focus on Escape", () => {
  render(<SiteHeader />);
  const toggle = screen.getByTestId("header-menu-toggle");
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  const link = screen.getByTestId("header-link-work");
  link.focus();
  fireEvent.keyDown(link, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
});
it("closes navigation after selecting a destination", () => {
  render(<SiteHeader />);
  const toggle = screen.getByTestId("header-menu-toggle");
  fireEvent.click(toggle);
  fireEvent.click(screen.getByTestId("header-link-work"));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});
