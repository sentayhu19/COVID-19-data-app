import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Test for App', () => {
  test('App Correctly renders...', () => {
    const tree = renderer.create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
