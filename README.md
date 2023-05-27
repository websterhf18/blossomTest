This is a [React Native](https://reactnative.dev/)

# Blossom Test

## Getting Started

1. Setup development environment using: [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)
2. Open project directory in terminal and run `yarn` to install all dependencies
3. `yarn pods` to install iOS libs
4. `yarn start` to start bundler (don't close this tab)
5. in a separate tab run `yarn ios` or `yarn android` to run project

## Project Structure

```
src
├── assets - All svg or images of the app
├── components - Components of the app
│   └── ...
│   └── fragments - Pieces of screen to render
│   └── ...
├── screens - screens of the app
├── services - request to data of the app(graphql queries)
├── types - all the interfaces, enums and types of the app
├── utils - helpers functions to parse or transform data
├── app.navigator - navigator container of screens
├── config - apollo client config file
├── store - context API to store the data

```
