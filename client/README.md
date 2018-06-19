# Datra App

## Getting Started

Project is written in React + Redux using the following useful libraries:
* Axios
* React (v16.2.0)
* Redux (v3.7.2)
* Redux-Saga
* Reselect
* Redux-Immutable
* React-Router
* Validator

### Installation

Go to project directory and install dependencies.

```
npm i
```
### Run in development mode

```
npm run start:dev
```

### Make production build (For old browsers lik IE 11 it creates special bundle-es5.js file which will contain
ES5 conversion of the project code generated babel-polyfill)

```
npm run build

npm start  (No need in this case as the API server already handles client production index.html file as the main
template engine in production mode)
```


