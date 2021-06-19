
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetail from '../MovieDetail';


describe('MovieDetail test', () => {
  it('MovieDetail should match snapshot', () => {
    const component = renderer.create(<MovieDetail
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
