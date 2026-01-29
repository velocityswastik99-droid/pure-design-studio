import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your actual ELB hostname
const ELB_HOST = "a5b0022fbfe1046cca35b4d2581b0d5b-505237755.us-east-1.elb.amazonaws.com";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",           // allows external access
    port: 8080,
    allowedHosts: "all",  // allow any hostname

  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
