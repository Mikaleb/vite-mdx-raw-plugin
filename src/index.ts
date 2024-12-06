import type { Plugin } from "vite";

/**
 * Returns a Vite plugin that transforms MDX files by wrapping them in an export statement and JSON-stringifying the code.
 *
 * @returns The Vite plugin instance.
 */
export default function viteMdxRawPlugin(): Plugin {
  return {
    name: "vite-mdx-raw-plugin",
    transform(code, id) {
      if (id.endsWith(".mdx")) {
        return {
          code: `export default ${JSON.stringify(code)
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029")}`,
        };
      }
    },
  };
}
