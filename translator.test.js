import { expect, it } from "@jest/globals";
import { translateEnglishToMorse } from "./translator.js";

it("should translate a to .-", () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-");
});

it("should translate b to -...", () => {
  const result = translateEnglishToMorse("b");
  expect(result).toBe("-...");
});

it("should translate c to -.-.", () => {
  const result = translateEnglishToMorse("c");
  expect(result).toBe("-.-.");
});
