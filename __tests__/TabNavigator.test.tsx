import 'react-native';
import {fireEvent} from '@testing-library/react-native';
import {renderWithNavigation} from '../src/testing/test-utils';
import TabNavigator from '../src/components/TabNavigator';

const comp = () => ({TabNavigator: TabNavigator});

describe('TabNavigator Tests', () => {
  it('renders correctly', () => {
    const {toJSON} = renderWithNavigation({
      screens: comp(),
    });
    expect(toJSON()).toMatchSnapshot();
  });

  test('MainTab initially is active', () => {
    const {getByText} = renderWithNavigation({
      screens: comp(),
    });

    const label = getByText(/main tab label/i);
    expect(label).toBeDefined();
    expect(label).toHaveStyle({color: 'green'});
  });

  test('Main tab first screen renders correctly', () => {
    const {getByText} = renderWithNavigation({
      screens: comp(),
    });

    const screenText = getByText(/main tab first screen/i);
    expect(screenText).toBeDefined();
  });

  test('SettingsTab initially is inactive', () => {
    const {getByText} = renderWithNavigation({
      screens: comp(),
    });
    const label = getByText(/settings tab label/i);
    expect(label).toBeDefined();
    expect(label).toHaveStyle({color: 'black'});
  });

  test('SettingsTab first screen renders correctly', () => {
    const {getByText} = renderWithNavigation({
      screens: comp(),
    });

    fireEvent.press(getByText(/settings tab label/i));

    const screenText = getByText(/settings tab first screen/i);
    expect(screenText).toBeDefined();
  });
});
