# React Masterclass project

## App details

The application is using the below technologies:

- [React](https://facebook.github.io/react/) - for building the client-side app and components
- [Webpack](https://webpack.github.io/) - for building and bundling
- [Babel.js](https://babeljs.io/) - for using the ES6 features, compiling JSX, etc.
- [Redux](https://redux.js.org/) - for state management
- [React Router](https://github.com/ReactTraining/react-router) - for client-side (browser) routing
- [Bootstrap](https://getbootstrap.com/) and [reactstrap](https://reactstrap.github.io/) - for UI
- [axios](https://github.com/axios/axios) - for HTTP requests
- [ESLint](http://eslint.org/) - for ES6 linting and best practices

## Run locally

You need to have node.js installed. For development I used node version `8.11.3` and npm version `6.9.0`, but you can use any node/npm version you want. When you are ready you can install all dependencies and run the development server by typing the below commands:

```
npm install
npm run api
npm start
open http://localhost:3000
```

Keep in mind that you should not run any process on port `3000` (webpack dev server). Feel free to change these options from the `scripts` section of `package.json` if you want to.

## Lint files

Lint all js/jsx files:

```
npm run lint
```

Auto-fix linting issues:

```
npm run lint:fix
```

## User stories

### Fefactor the application

1. Use any extra libraries you want
2. Refactor the code using varius react patterns
3. Use redux to manage the state
4. Eliminate unecessary requests
5. Add two filters to the rendered employees. The one with filter the employees by gender and the other by department
