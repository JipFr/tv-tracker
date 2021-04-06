import { defineConfig } from "vite";
import { resolve, join } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
			"@icons": join(__dirname, "src", "assets", "icons"),
		},
	},
});
