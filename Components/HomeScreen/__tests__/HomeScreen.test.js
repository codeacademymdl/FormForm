import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import HomeScreen from '../HomeScreen.component';


describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('ComponentDidMount', async () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.instance().state.formData.length === 0).toBe(true);
    axios.get = jest.fn(axios.get);
    await wrapper.instance().componentDidMount();
    // expect(axios.get).toHaveBeenCalled();
    expect(wrapper.instance().state.formData.length > 0).toBe(true);
  });
});
