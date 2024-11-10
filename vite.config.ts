import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["module:@preact/signals-react-transform"]],
      },
    }),
  ],
  resolve: {
     alias: {
       "@": path.resolve(__dirname, "src"),
       '@side-bar': path.resolve(__dirname, "src", "modules", "side-bar"),
       '@chat': path.resolve(__dirname, "src", "modules", "chat"),
       '@chat-list': path.resolve(__dirname, "src", "modules", "chat-list"),
       '@shared': path.resolve(__dirname, "src", "modules", "shared")
     },
  },
});
