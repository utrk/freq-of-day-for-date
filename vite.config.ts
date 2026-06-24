import { defineConfig } from "vite-plus";

export default defineConfig({
  base: "./",
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
});
