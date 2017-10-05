import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TestForm from './TestForm';

function setup() {
  const props = {
    test: {},
    onChange: () => {}
  };

  return shallow(<TestForm {...props}/>)
}

describe('TestForm via Enzyme', () => {
  it('renders 1 form and 2 TextInput', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('TextInput').length).toBe(2);
  });
});
