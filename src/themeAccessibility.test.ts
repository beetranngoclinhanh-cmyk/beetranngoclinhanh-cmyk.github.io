import { describe, expect, it } from "vitest";
function luminance(hex: string) {
  const rgb = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
describe("Linh Anh text colour contrast", () => {
  it.each([
    ["#24271d", "#f7d84a"],
    ["#50513e", "#f7d84a"],
    ["#24271d", "#fffbea"],
    ["#50513e", "#fffbea"],
    ["#dedbc6", "#24271d"],
    ["#f7d84a", "#24271d"],
  ])("supports normal text for %s on %s", (foreground, background) => {
    const values = [luminance(foreground), luminance(background)].sort(
      (a, b) => b - a,
    );
    expect((values[0] + 0.05) / (values[1] + 0.05)).toBeGreaterThanOrEqual(4.5);
  });
});
