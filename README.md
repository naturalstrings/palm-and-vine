<h1 align="center" >Palm & Vine Recording Studio Website</h1>
<p align="center"> 
   <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/palmvinelogo-no-bg.png" width="200" height="200" alt="studio logo" >
</p>

---
## Technologies

<details>
<summary>Front-End Development</summary>

# React JS Project

[![React Logo](https://raw.githubusercontent.com/facebook/react/main/logo/react-logo.png)](https://reactjs.org/)

**React JS** is a JavaScript library for building user interfaces. It's known for its component-based architecture, declarative style, and efficient rendering capabilities. This project leverages React JS to create a dynamic and interactive web application.

</details>






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
