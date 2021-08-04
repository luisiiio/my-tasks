![CI](https://img.shields.io/badge/Build%2C%20Test%2C%20Lint%20for%20Main-passing-%2331C755)
<a href="https://mytasks.picnicdigital.io" target="_blank">
<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/35ae5664-8756-4e3a-bb0c-d341283c5dca/deploy-status" width="130" />
</a>

<h1 align="center">
  <br>My Tasks App <br>
</h1>
<p align="center"><a href="https://mytasks.picnicdigital.io">DEMO online</a><p>

---

<br/>
<details><summary>Table of contents</summary><p>

- [Getting Stared](#-getting-stared)
- [Scrips](#-scrips)
- [Development Process](#-development-process)
- [Technologies](#-technologies)
- [Author & Maintainer](#-author-&-manitainer)
- [Lincense](#-lincense)

</p></details>
<br/>

## 🚀 Getting Started

### Pre-requirements

- yarn
- node

### Installation

1. Clone this repo.
2. Install dependencies: `yarn`
3. Install hooks `yarn prepare`
4. Start the server: `yarn start`

The website will be available at localhost:8080

## 🔃 Scripts

### lint

Checks for linter errors (js files)

```bash
yarn lint
yarn lint:fix
```

Checks for linter errors (css files)

```bash
yarn lint:css
yarn lint:css:fix
```

Checks for linter errors (all files staged)

```bash
yarn precommit
```

## 🎯 Development Process

### Cycle 1:

| Begins      | Ends        |
| ----------- | ----------- |
| August 2021 | August 2021 |

- add graph to see statistics of completed tasks
- add task player to be able to start, pause or restart the time of each task

### Cycle 2:

| Begins         | Ends           |
| -------------- | -------------- |
| September 2021 | September 2021 |

- add REST API with AWS AppSync
- use DinamoDB as a database
- integrate Cognito for user authentication

## 🖥 Technologies

- React
- Styled-Components
- Redux
- React Router
- Material UI
- Webpack
- Babel
- Linters for js, css, html, json files
- ESLint, Prettier, Husky

## 👤 Author & Maintainer

- 🤖 [Luis Zepeda](http://github.com/luisiiio)

## 📖 Lincense

The (MIT) Lincense
