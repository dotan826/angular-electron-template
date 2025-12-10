import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["electron/main.ts", "electron/preload.ts"],
  format: ["cjs"],
  outDir: "dist-electron",
  bundle: true,
  minify: false,
  sourcemap: false,

  // ❗ CRITICAL: DO NOT BUNDLE ELECTRON
  external: ["electron"],

  // prevent tsup from trying to load electron during build
  noExternal: [],
});
