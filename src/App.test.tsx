import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import App from "./App";
import { projects, profile } from "./data/linhAnh";
afterEach(cleanup);
describe("Linh Anh portfolio", () => {
  it("introduces the student and provides every section destination", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Linh Anh",
    );
    expect(screen.getByText(/a high school student in Hanoi/)).toBeVisible();
    for (const link of within(screen.getByRole("navigation")).getAllByRole(
      "link",
    )) {
      expect(
        document.getElementById(link.getAttribute("href")!.slice(1)),
      ).not.toBeNull();
    }
    expect(document.body).not.toHaveTextContent("Nhâm Quốc Hùng");
  });
  it("offers the correct email, resume and supported project evidence", () => {
    render(<App />);
    expect(screen.getByTestId("contact-email-link")).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(screen.getByTestId("hero-resume-link")).toHaveAttribute(
      "href",
      profile.resume,
    );
    expect(screen.getByTestId("hero-resume-link")).toHaveAttribute(
      "download",
      "Tran-Ngoc-Linh-Anh-Resume.docx",
    );
    for (const project of projects) {
      const link = screen.getByTestId(`${project.id}-evidence-link`);
      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(screen.getByTestId("green-evidence-link")).toHaveTextContent(
      "co-authored paper",
    );
  });
  it("distinguishes future plans, student placements and contribution boundaries", () => {
    render(<App />);
    expect(screen.getByText(/2027 · Pending \/ self-study/)).toBeVisible();
    expect(screen.getByText(/planned 2027 sprint triathlon/)).toBeVisible();
    expect(screen.getByText(/Half-day student placements/)).toBeVisible();
    expect(
      screen.getByText(/paper reports 103 valid responses/),
    ).toHaveTextContent("Stata");
    expect(screen.getByText("Python (basic)", { exact: false })).toBeVisible();
  });
});
