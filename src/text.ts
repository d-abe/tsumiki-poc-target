/**
 * 全角の英数字（Ａ-Ｚ、ａ-ｚ、０-９）を半角にする。ほかの文字はそのまま。
 */
export function toHalfWidthAlnum(input: string): string {
  return input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0xfee0),
  );
}

/**
 * 前後の空白を取る。全角スペース（U+3000）も空白として扱う。
 */
export function trimSpaces(input: string): string {
  return input.replace(/^[\s　]+|[\s　]+$/g, "");
}

/**
 * 連続する空白（全角スペースを含む）を半角スペース1つにまとめ、前後の空白を取る。
 */
export function collapseSpaces(input: string): string {
  return trimSpaces(input).replace(/[\s　]+/g, " ");
}
