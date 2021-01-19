import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';

it('App renders correctly', () => {
  // const props = { className: 'hello', value: true };
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
