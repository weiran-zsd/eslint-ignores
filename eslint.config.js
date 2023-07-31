import js from "@eslint/js";
import { ignores } from "./lib/index.js";

export default [js.configs.recommended, ignores()];
