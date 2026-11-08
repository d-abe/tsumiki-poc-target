import { describe, expect, it } from "vitest";

import { collapseSpaces, toHalfWidthAlnum, trimSpaces } from "./text";

describe("toHalfWidthAlnum", () => {
  it("全角英数を半角にする", () => {
    expect(toHalfWidthAlnum("ＡＢＣａｂｃ０１２")).toBe("ABCabc012");
  });

  it("英数以外の文字はそのまま", () => {
    expect(toHalfWidthAlnum("ツミキ－１２３！")).toBe("ツミキ－123！");
  });

  it("空文字はそのまま", () => {
    expect(toHalfWidthAlnum("")).toBe("");
  });
});

describe("trimSpaces", () => {
  it("前後の半角・全角スペースを取る", () => {
    expect(trimSpaces(" 　ツミキ　 ")).toBe("ツミキ");
  });

  it("改行やタブも取る", () => {
    expect(trimSpaces("\n\tabc\t\n")).toBe("abc");
  });

  it("途中の空白は残す", () => {
    expect(trimSpaces(" a b ")).toBe("a b");
  });
});

describe("collapseSpaces", () => {
  it("連続する空白を1つにまとめる", () => {
    expect(collapseSpaces("  a　　b   c ")).toBe("a b c");
  });
});
