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
       '@side-bar': path.resolve(__dirname, "src", "features" ,"side-bar"),
       '@chat': path.resolve(__dirname, "src", "features","chat"),
       '@chat-list': path.resolve(__dirname, "src", "features","chat-list"),
       '@channels': path.resolve(__dirname, "src", "features","channels"),
       '@states': path.resolve(__dirname, "src", "features","states"),
       '@comunities': path.resolve(__dirname, "src", "features","comunities"),
       '@shared': path.resolve(__dirname, "src","shared"),
       '@assets': path.resolve(__dirname, "src","assets")
     },
  },
});
