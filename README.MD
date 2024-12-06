<h3 align="center">

![Logo](https://raw.githubusercontent.com/Mikaleb/vite-mdx-raw-plugin/refs/heads/main/public/logo.png)

</h3>

# Vite MDX Raw Plugin

This plugin allows you to use MDX (Markdown with JSX) in your Vite project, and it preserves the raw JSX content when compiling.

<p align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![NPM Downloads](https://img.shields.io/npm/dw/vite-mdx-raw-plugin)

</p>

## Installation

To install the plugin, run:

```bash
npm install vite-mdx-raw-plugin --save-dev
yarn add vite-mdx-raw-plugin -d
```

## Usage

You can load it in your vite configuration like so :

```ts
// https://vitejs.dev/config/

import viteMdxRawPlugin from 'vite-mdx-raw-plugin'

export default defineConfig({
  plugins: [
    // vue(), example
    viteMdxRawPlugin(),
    // etc you can add more plugin
  ],
```

Then you can import your vue file like you would do with any string :

```ts
const mdFile = await import(`content.mdx`);
```

And after use any mdx parser you would like, I recommend [@nuxtjs/mdc](https://github.com/nuxt-modules/mdc) but you can go ahead and use another or build your own !

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Authors

- [@mikaleb](https://www.github.com/mikaleb)

## License

[MIT](https://choosealicense.com/licenses/mit/)
