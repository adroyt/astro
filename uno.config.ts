import extractorSvelte from "@unocss/extractor-svelte";
import {
	defineConfig,
	presetIcons,
	presetUno,
	presetAttributify,
	transformerDirectives,
	transformerCompileClass,
	transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
	extractors: [extractorSvelte],
	configDeps: ["./my-preset.ts"],

	theme: {},

	rules: [],

	shortcuts: [],

	variants: [],

	preflights: [
		{
			getCSS: () => `
        :root {
          -webkit-tap-highlight-color: transparent;
        }

        body {
          position: relative;
          overflow-x: hidden;
        }
      `,
		},
	],

	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],

	presets: [
		myPreset,
		presetUno(),
		presetIcons({ scale: 1.2 }),
		presetAttributify(),
	],
});
