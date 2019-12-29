# Typescript starter

A starter template for personal use, uses:

  * [Parcel](https://parceljs.org/), for bundling
  * [Typescript](https://www.typescriptlang.org/), as a js replacement
  * [Eslint](https://eslint.org/), for linting
  * [Jest](https://jestjs.io/), for testing
  * [Editorconfig](https://editorconfig.org/), for the editor configuration
  * [Prettier](https://prettier.io/), code formatter
  * [Husky](https://github.com/typicode/husky), for managing the pre-commit hooks

## Before starting:


### Installing NVM

For now, the use of [nvm](https://github.com/nvm-sh/nvm) is recommended. This is a manager that enables the easy upgrading and downgrading of node versions. To install:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
nvm install 10
nvm default node
```

### Installing yarn

From the [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) website:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```bash
sudo apt update && sudo apt install --no-install-recommends yarn
````

## React

When you want to use react, add the required react packages:

`yarn add react react-dom`

And for the types:

`yarn add -D @types/react @types/react-dom`

Also, if you want HMR switch to the following parcel version, because of a [Bug](https://github.com/parcel-bundler/parcel/issues/2894), with the reloading of a React typescript project. Just change the version to `0.11.0` in the `package.json`

The repository is already configured to be able to use `jsx` in `tsx` files.

# Commands

### Starting/Building

- `yarn develop`: Type check and start the project through parcel, this should also hot-reload the code automatically.
- `yarn start`: The same as the above without the type checking.
- `yarn build`: Build the code so that it can be deployed in production.
- `yarn type-check`: Run the Typescript type checker once.
- `yarn type-check:watch`: Run the Typescript type checker in watch mode.
- `yarn cli`: Use this if you want to run code on the `cli` and not on the web

### Testing/linting

- `yarn lint`: Start the linter to check if the code adheres to the linter.
- `yarn lint:fix` Uses the linter to autofix the problems the best it can
- `yarn test`: Run the unit tests
- `yarn format`: Run prettier to format the files

## ESlint

The eslint config is based on the the [airbnb](https://github.com/airbnb/javascript) style guide 
