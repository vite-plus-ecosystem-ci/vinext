import { defineConfig } from "vite-plus";
import vinext from "vinext";

export default defineConfig({
  test: { clearMocks: false },
  plugins: [vinext({ appDir: import.meta.dirname })],
});
