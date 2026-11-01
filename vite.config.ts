import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
    fs: {
      strict: true,
    },
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "127.0.0.1",
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    target: "es2020",
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("/node_modules/")) return undefined;

          if (
            ["i18next", "react-i18next", "i18next-browser-languagedetector"].some((name) =>
              id.includes(`/node_modules/${name}/`),
            )
          ) {
            return "i18n";
          }

          if (
            ["react", "react-dom", "react-router", "react-router-dom"].some((name) =>
              id.includes(`/node_modules/${name}/`),
            )
          ) {
            return "react-vendor";
          }

          if (
            [
              "framer-motion",
              "lucide-react",
              "next-themes",
              "class-variance-authority",
              "clsx",
              "tailwind-merge",
            ].some((name) => id.includes(`/node_modules/${name}/`))
          ) {
            return "ui-vendor";
          }

          return undefined;
        },
      },
    },
  },
});
