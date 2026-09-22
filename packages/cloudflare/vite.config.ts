import { defineConfig } from "vite-plus";

const typescriptPackageUrl = import.meta.resolve("typescript/package.json");
const { default: getTscPath } = await import(
  new URL("lib/getExePath.js", typescriptPackageUrl).href
);

export default defineConfig({
  pack: {
    entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.d.ts"],
    clean: true,
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
      neverBundle: true,
    },
    dts: { generator: "tsgo", tsgo: { path: getTscPath() } },
    fixedExtension: false,
    format: "esm",
    tsconfig: "../../tsconfig.cloudflare-dts.json",
    unbundle: true,
  },
});
