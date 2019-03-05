import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../LandingPageHeader.component';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header heading="hello" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
