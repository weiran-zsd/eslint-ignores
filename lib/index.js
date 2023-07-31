/**
 * @fileoverview eslint ignore files automatically.
 * @author 唯然<weiran.zsd@outlook.com>
 */
import process from "process";
import fs from "fs";
import path from "path";

/**
 * @param {object} [opts]
 * @param {string} [opts.cwd]
 * @param {string} [opts.filename]
 * @param {string[]?} [opts.extraIgnores]
 * @returns {{ignores: string[]}} the list of ignored files
 */
export function ignores(opts = {}) {
  const ignoreFile = path.join(
    opts.cwd || process.cwd(),
    opts.filename || ".gitignore"
  );
  const text = fs.readFileSync(ignoreFile, "utf-8");
  const lines = text
    .split(/(\r\n|\n)+/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  return {
    ignores: [...lines, ...(opts.extraIgnores || [])],
  };
}
