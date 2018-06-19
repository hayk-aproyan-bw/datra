# Datra API

* [Client](README.md#client)  (Frontend application written in React + Redux)

## Getting Started

Project is written in Node.js + Express using the following useful libraries:
* Mongoose (MongoDB node.js driver)
* Passport (used JWT strategy for signing access token)
* Moment (Dealing with date/time stuff)
* Express-validator (Handled request validations from client)

## Config

```console
cp .env.sample .env
```

## Setup

```console
npm i
```

Fill out the `.env` file.

### Run development server

```console
npm run start:dev
```

### Run production server

```console
npm start
```
