### This is how you should test 🧪 your react-native ⚛️ components with [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

##### 👏 This is a fork of [react-native-testing](https://github.com/vanGalilea/react-native-testing)

In this repo you'll find several examples that will cover:
- 👆 [Clicking buttons and asserting onPress' outcome](./__tests__/Counter.test.tsx).
- 📲 [Filling a simple login form and asserting successful submission](./__tests__/LoginSubmission.test.tsx).
- 📡 [Mocking fetch calls](./__tests__/LoginSubmission.test.tsx#L36).
- 🧭 [Mocking navigation through screens](./__tests__/LoginSubmission.test.tsx#L13). ([react navigation v5](https://reactnavigation.org/))
- 🔚 [E2E feel due to real navigation throughout screens](./__tests__/Home.test.tsx).
- 📥 [Handling and mocking providers (Like NavigationContainer and Store)](./src/testing/test-utils.tsx).
- 📹 [Mocking external lib.'s components (react-native-video)](./__tests__/Video.test.tsx).
- 🎭 [Mocking and interacting with RN's Modal component](./__tests__/Modal.test.tsx).
- 🧾 [Handling with a screen with RN's FlatList component](./__tests__/FlatList.test.tsx).
- 📡 [Using MSW to mock api calls and handling loading/errors](./__tests__/ListWithFetch.test.tsx).
- 🐗 [Rendering with redux and asserting on synchronous actions](./__tests__/CounterUsesRedux.test.tsx)
- 🐭 [Testing redux reducers with snapshots](./__tests__/CounterSlice.test.ts)
- 🐰 [Rendering with navigation to test tab navigator](./__tests__/TabNavigator.test.tsx)

##### Refer to [documentation](./docs/testing/README.md) for more information.

## TODO

### Add test examples:

#### Redux
- Rendering with redux and asserting on asynchronous actions
- Custom redux middleware

#### Firebase
- Firebase authentication
- Firebase firestore

#### React Navigation v5
- Navigation listeners
- Navigation prop functionality, getParams, setParams etc.

#### Other
- Mocking of listeners
- Disabling of touchables
- Dropdown picker
- React Native Animated
- Mocking of platform

### Add Documentation:
- Tech stack used
- Unit, integrations & E2E docs
- Watchman
- Coverage report
