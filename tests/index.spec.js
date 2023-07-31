import test from "node:test";
import { strict as t } from "node:assert/strict";
import { ignores } from "../lib/index.js";

test("ignores", function () {
  t(typeof ignores === "function");

  const config = ignores();

  t(config);
  t(Array.isArray(config.ignores));
  t(config.ignores.includes("/node_modules"));
});
