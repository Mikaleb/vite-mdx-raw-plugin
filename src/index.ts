import type { Plugin } from "vite";

export default function mdxRawPlugin(): Plugin {
  return {
    name: "vite-plugin-mdx-raw",
    transform(code, id) {
      if (id.endsWith(".mdx")) {
        return {
          code: `export default ${JSON.stringify(code)}`,
          map: null,
        };
      }
    },
  };
}
