import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    clearMocks: false,
    fileParallelism: false,
    hookTimeout: 10_000,
    testTimeout: 40_000,
  },
});
