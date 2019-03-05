import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FillForm from '../CreateForm.component';


describe('FillForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FillForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('checks if state of count changes', () => {
    const wrapper = shallow(<FillForm />);
    expect(wrapper.instance().state.count).toEqual(0);
    wrapper.instance().counterIncrement();
    expect(wrapper.instance().state.count).toEqual(1);
  });

  it('checks if onChangeAddField stores the text in array', () => {
    const wrapper = shallow(<FillForm />);
    expect(wrapper.instance().state.fields).toEqual([]);
    wrapper.instance().onChangeAddField('hello', 0);
    expect(wrapper.instance().state.fields).toEqual(['hello']);
  });

  it('checks if onChangeAddField stores the multiple texts in array', () => {
    const wrapper = shallow(<FillForm />);
    expect(wrapper.instance().state.fields).toEqual([]);
    wrapper.instance().onChangeAddField('hello', 0);
    wrapper.instance().onChangeAddField('bye', 1);
    expect(wrapper.instance().state.fields).toEqual(['hello', 'bye']);
  });

  it('checks if counterIncrement function triggered', () => {
    const wrapper = shallow(<FillForm />);
    wrapper.find('TouchableHighlight').first().simulate('press');
  });

  it('checks if onSubmit function triggered', () => {
    const wrapper = shallow(<FillForm />);
    wrapper.find('TouchableHighlight').at(1).simulate('press');
  });
});
