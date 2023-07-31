/**
 * @param {object} [opts]
 * @param {string?} [opts.cwd]
 * @param {string?} [opts.filename]
 * @param {string[]?} [opts.extraIgnores]
 * @returns {{ignores: string[]}} the list of ignored files
 */
export function ignores(
  opts?:
    | {
        cwd?: string | null | undefined;
        filename?: string | null | undefined;
        extraIgnores?: string[] | null | undefined;
      }
    | undefined
): {
  ignores: string[];
};
