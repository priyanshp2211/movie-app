
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../SearchBox';


describe('SearchBox test', () => {
  it('SearchBox should match snapshot', () => {
    const component = renderer.create(<SearchBox
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
