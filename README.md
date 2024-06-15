# Figma plugin typescript boilerplate
This is a Figma plugin boilerplate to start developing with typescript. Visit [Figma plugin api](https://www.figma.com/plugin-docs/) for Figma plugin api documentation. 

## Quick start
  ```bash
  mkdir my-figma-plugin
  cd my-figma-plugin
  npx degit https://github.com/alxv2016/figma-plugin-template.git
  ```
## Development
This boilerplate is created with webpack and typescript, it provides minimal base styling following Figma's UI style guide.
Configure your Figma [manifest.json](https://www.figma.com/plugin-docs/manifest/) to start development.
  ```bash
  npm run dev // starts development server
  npm run build // builds project for publishing
  ```
