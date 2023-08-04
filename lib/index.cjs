/**
 * @fileoverview eslint ignore files automatically(cjs projects).
 * @author 唯然<weiran.zsd@outlook.com>
 */
const process = require("process");
const fs = require("fs");
const path = require("path");

/**
 * @param {object} [opts]
 * @param {string} [opts.cwd]
 * @param {string} [opts.filename]
 * @param {string[]?} [opts.extraIgnores]
 * @returns {{ignores: string[]}} the list of ignored files
 */
module.exports.ignores = function ignores(opts = {}) {
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
