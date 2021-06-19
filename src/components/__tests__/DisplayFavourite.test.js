
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import DisplayFavourite from '../DisplayFavourite';


describe('DisplayFavourite test', () => {
  it('DisplayFavourite should match snapshot', () => {
    const component = renderer.create(<DisplayFavourite
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
