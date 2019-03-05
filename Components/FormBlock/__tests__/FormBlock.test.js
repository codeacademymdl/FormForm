import React from 'react';

import renderer from 'react-test-renderer';
import FormBlock from '../FormBlock.component';


describe('FillForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FormBlock title="ThisTitle" date="10thDecember 2019" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
