
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MovieStarRating from '../MovieStarRating';


describe('MovieStarRating test', () => {
  it('MovieStarRating should match snapshot', () => {
    const component = renderer.create(<MovieStarRating
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
