# Testing In General
As your codebase expands, small errors and edge cases you don’t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild.

## Testing methods
Tests can usually be separated by 3 different main test categories

##### Unit Tests
Unit tests cover the smallest parts of code, like individual functions, classes or small components.
This is like testing all the parts of a car separately ensuring that they work as expected on their own.

##### Integration Tests
Integration tests collectively tests a piece of software. This is to ensure that the integration of several smaller units that works together are working as expected. This is the equivalent of testing that car parts work together as expected. For example that the air conditioner gets turned on correctly when pushing a specific button in the car.

##### Component Tests
React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately.

For testing React components, there are two things you may want to test:

- **Interaction**: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)
- **Rendering**: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)

##### End-to-End Tests
In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective.

This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing.

E2E tests are not covered in this repository yet.

Refer to [React Native Testing Section](https://reactnative.dev/docs/testing-overview) in official docs for more information.
