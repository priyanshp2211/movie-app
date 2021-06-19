
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MovieListHeading from '../MovieListHeading';


describe('MovieListHeading test', () => {
  it('MovieListHeading should match snapshot', () => {
    const component = renderer.create(<MovieListHeading
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
