import { defineConfig } from "vite";

export default ({ mode }) => {
  return defineConfig({
    base: "",
    build: {
      outDir: "build",
      minify: false,
    },
    assetsInclude: ["**/*.jnlp", "**/*.jar", "**/*.pdf", "**/*.apk"],
  });
};
