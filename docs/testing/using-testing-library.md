# Using testing-library/react-native
The react native testing library [@testing-library/react-native](https://callstack.github.io/react-native-testing-library/) is used for rendering component and query UI elements. It is built on top of [react-test-renderer](https://reactjs.org/docs/test-renderer.html) which enables the rendering of react component to pure JavaScript objects without needing the native mobile environment. The purpose of **@testing-library/react-native** is to promote proper testing to avoid testing implementation details see https://kentcdodds.com/blog/testing-implementation-details for more information.

## Querying Elements With Testing-Library
When testing a component we need a way to identify the specific UI elements to assert on them.

## Query Priority
In most cases elements are queried [ByText](https://callstack.github.io/react-native-testing-library/docs/api-queries#bytext) as this is usually unique. This should be first priority.
If an element is a TextInput either [ByPlaceholderText](https://callstack.github.io/react-native-testing-library/docs/api-queries#byplaceholdertext) or [ByDisplayValue](https://callstack.github.io/react-native-testing-library/docs/api-queries#bydisplayvalue) can be used.
If an element does not contain any text it can be queried by using the accessibility related ids. If the component only contains one element of a specific role the [ByRole](https://callstack.github.io/react-native-testing-library/docs/api-queries#bya11yrole-byaccessibilityrole-byrole) query can be used. The roles are fixed values and can be given to elements with the "**accessibilityRole**" prop. A list of them and how to use them can be found in [react native docs](https://reactnative.dev/docs/accessibility#accessibilityrol)

If neither of the above is sufficient, for example if a component consists of multiple elements with the same role, the [ByLabelText](https://callstack.github.io/react-native-testing-library/docs/api-queries#bya11ylabel-byaccessibilitylabel-bylabeltext) or [ByHintText](https://callstack.github.io/react-native-testing-library/docs/api-queries#bya11yhint-byaccessibilityhint-byhinttext) query can be used.

If neither of the above works the **last resort** [ByTestId](https://callstack.github.io/react-native-testing-library/docs/api-queries#bytestid) is used

Keep in mind that the accessibilityLabel and testID should be unique across the whole code base as these are also used for querying elements in automatic generation of screenshots for the app stores.

## Querying SVG Elements
SVG elements does not contain any text. For these use accessibilityLabel and name it the same as the svg file name followed by icon. Make sure the name as precisely as possible describes what the icon shows.

Example: an svg named ArrowGrey.svg
```
import { ArrowGrey } from './src/assets';

const Icon = () => <SvgXml accessibilityLabel="ArrowGreyIcon" xml={ArrowGrey} />

// Query in test
const arrowIcon = getByLabelText('ArrowGreyIcon')
```
