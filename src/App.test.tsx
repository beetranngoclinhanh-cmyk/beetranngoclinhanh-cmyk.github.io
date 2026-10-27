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

describe("Evidence and award amendment", () => {
  it("uses the requested award order and links the supplied award images", () => {
    render(<App />);
    const list = screen.getByTestId("award-list");
    expect(
      within(list)
        .getAllByRole("heading", { level: 4 })
        .map((node) => node.textContent),
    ).toEqual([
      "Siam International Math & Science Olympics",
      "World Invention Creativity Olympics",
      "John Locke Global Essay Prize",
      "FDB Talent",
      "CNN Natural Sciences Fun Fair",
      "Internet Olympiad English",
    ]);
    expect(within(list).getAllByRole("img")).toHaveLength(6);
    expect(within(list).queryByText(/not supplied/)).not.toBeInTheDocument();
    expect(screen.getByTestId("award-evidence-evidence-25")).toHaveAttribute(
      "href",
      expect.stringContaining("Simso.pdf"),
    );
    expect(screen.getByText("DATA/FINANCE / 2026")).toBeVisible();
  });
  it("opens both HUST confirmations as distinct PDFs", () => {
    render(<App />);
    const first = screen.getByTestId("hust-letter-1");
    const second = screen.getByTestId("hust-letter-2");
    expect(first.getAttribute("href")).toMatch(/\.pdf$/);
    expect(second.getAttribute("href")).toMatch(/\.pdf$/);
    expect(first.getAttribute("href")).not.toBe(second.getAttribute("href"));
    expect(first).toHaveAttribute("rel", "noopener noreferrer");
  });
  it("provides 24 source files and the illustrated cover without a video download", () => {
    render(<App />);
    for (let n = 1; n <= 25; n++) {
      const link = screen.getByTestId(
        `evidence-${String(n).padStart(2, "0")}-file-link`,
      );
      expect(link.getAttribute("href")).toBeTruthy();
      expect(link).toHaveAttribute("target", "_blank");
    }
    expect(document.querySelector("video")).toBeNull();
    expect(
      screen.getByTestId("evidence-20-file-link").getAttribute("href"),
    ).not.toMatch(/\.mp4/);
    expect(screen.getByTestId("evidence-20-file-link")).toHaveTextContent(
      "SVG",
    );
  });
});

it("shows every supplied image/document preview and opens evidence collections by default", () => {
  render(<App />);
  const gallery = document.getElementById("evidence")!;
  expect(gallery.querySelectorAll("img")).toHaveLength(25);
  for (const collection of gallery.querySelectorAll("details"))
    expect(collection).toHaveAttribute("open");
  for (const id of ["09", "15", "20"])
    expect(
      screen.getByTestId(`evidence-${id}-file-link`).querySelector("img"),
    ).not.toBeNull();
});
