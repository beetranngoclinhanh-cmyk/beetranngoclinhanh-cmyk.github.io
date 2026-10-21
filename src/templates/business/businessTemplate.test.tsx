import { describe, expect, it } from "vitest";
import { sectionIds } from "../../data/portfolio";
import { engineeringTemplate } from "../engineering";
import { businessTemplate } from ".";
describe("Retained Business module ownership", () => {
  it("owns every canonical section", () => {
    for (const id of sectionIds)
      expect(businessTemplate.sectionComponents[id]).not.toBe(
        engineeringTemplate.sectionComponents[id],
      );
  });
  it("owns its local journal view", () => {
    expect(businessTemplate.JournalPostComponent).not.toBe(
      engineeringTemplate.JournalPostComponent,
    );
  });
});
