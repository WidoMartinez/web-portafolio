import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import sitemap from "vite-plugin-sitemap";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lista de las secciones de tu página
const routes = [
	"/",
	"/#home",
	"/#services",
	"/#projects",
	"/#testimonials",
	"/#contact",
];

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		jsxLocPlugin(),
		sitemap({
			hostname: "https://www.anunciads.cl", // Dominio actualizado
			dynamicRoutes: routes,
			changefreq: "monthly",
			priority: 0.8,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
		},
	},
});
