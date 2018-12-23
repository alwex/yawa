import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'whatwg-fetch'

global.fetch = require('jest-fetch-mock')

// ----------------------------------------------------------------
// mock fetch to enable fake http calls in tests
// ----------------------------------------------------------------
// global.fetch = require('jest-fetch-mock')

// ----------------------------------------------------------------
// mock the native gesture handler to run in a test environment
// ----------------------------------------------------------------
jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {
      return null
    }),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
      replace: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    },
  }
})
