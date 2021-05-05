# Using Jest
The JavaScript test framework [Jest](https://jestjs.io/) is used to setup a testing environment which enables us with tools to create, run and structure tests. Jest ships with react native to work just out of the box. Jest is a general purpose JavaScript test framework meaning it can be used for any JS technologies.

To execute all tests in the \_\_tests\_\_ folder:

```
yarn test
```

Jest provides tools to analyse how much of the code has been covered by tests which is show in a [coverage report](https://jestjs.io/docs/cli#--coverageboolean):

```
yarn test:coverage
```

## Watchman
Watchman is a tool that is looking for changes in the filesystem. This can be used when running tests to auto execute tests whenever a change is made to source files. It is applied by giving the "watch" or "watchAll" flag.

```
yarn test:watch
```
