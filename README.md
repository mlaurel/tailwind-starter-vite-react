[![Netlify Status](https://api.netlify.com/api/v1/badges/01f1abc2-7fe6-481a-970a-250f9da9b8fc/deploy-status)](https://app.netlify.com/sites/serverless-starter-eleventy-tailwind/deploys)

# Vite Starter Template

Website template using next generation frontend tooling with [ViteJS](https://vitejs.dev), with [ReactJS](https://reactjs.org),  [TypeScript](https://github.com/vitejs/create-vite-app/tree/master/template-react-ts) and [Tailwind CSS/UI](https://tailwindcss.com).   Future versions will include more serverless function options with GraphQL, [Hasura)](https://cloud.hasura.io/projects) with [Heroku](https://dashboard.heroku.com/), [Sanity.io](https://sanity.io) and others.

## Resource Links

- [Vite](https://vitejs.dev/)
- [React](https://www.reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Netlify Functions](https://app.netlify.com/sites/mlaurel-serverless-movies/functions)
- [Netlify Identity](https://app.netlify.com/sites/mlaurel-serverless-movies/identity)
- [Hasura (see project mlaurel-fem)](https://cloud.hasura.io/projects)
- [Heroku (see app agile-tundra-44164)](https://dashboard.heroku.com/apps/agile-tundra-44164)

## Getting Started

### 1. Click the `Use This Template` button in GitHub, or clone the repository using:

```sh
git clone https://github.com/mlaurel/vite-starter-react-tailwind.git website-name
```

### 2. Navigate to the directory

```sh
cd website-name
```

### 3. Install the dependencies

```sh
yarn
```

### 4. Build the project for deployment (i.e. tree-shacking and purgeCSS)

```sh
yarn build
```

### 5. Development environment

The easiest way to develop and test, using Serverless Functions, is by installing the **Netlify CLI**.

```sh
yarn global add netlify-cli -g
```

Then run...

```sh
netlify dev
```

Alternatively, you can use...

```sh
yarn dev
```

## Author

[Mike Laurel](https://www.github.com/mlaurel)

## License

MIT

See `LICENSE` for more information.
