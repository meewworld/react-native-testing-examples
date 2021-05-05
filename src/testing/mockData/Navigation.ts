import {jest} from '@jest/globals';

export const geneNavigationPropMock = (
  setOptionsMock = jest.fn(),
  goBackMock = jest.fn(),
  resetMock = jest.fn(),
  isFocusedMock = jest.fn(),
  addListenerMock = jest.fn(() => ({
    remove: jest.fn(),
  })),
  setParamsMock = jest.fn(),
  dispatchMock = jest.fn(),
  navigateMock = jest.fn(),
) => {
  const navigationProp = {
    navigate: navigateMock,
    reset: resetMock,
    goBack: goBackMock,
    setParams: setParamsMock,
    dispatch: dispatchMock,
    setOptions: setOptionsMock,
    isFocused: isFocusedMock,
    addListener: addListenerMock,
  };
  return navigationProp;
};
