import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    _APIKEY_: `"${process.env.APIKEY}"`,
    _SEARCH_ENGINE_ID: `"${process.env.SEARCH_ENGINE_ID}"`,
  },
});
