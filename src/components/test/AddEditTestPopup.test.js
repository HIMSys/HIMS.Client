import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {AddEditTestPopup} from './AddEditTestPopup';

describe ('Add-Edit Test Popup', () => {
  it('sets error message upon blur of empty name field', () => {
    const props = {
      actions: { saveTest: () => { return Promise.resolve(); },
        popupDidMount: () => {}, popupWillUnmount: () => {}},
      test: {testId: '', name: '', description: ''},
      popupState: {testId: '', name: '', description: ''}
    };
    const wrapper = mount(<AddEditTestPopup {...props}/>);
    const saveButton = wrapper.find('button').last();
    expect(saveButton.prop('id')).toBe('saveButton'); //assure we found the submit.
    saveButton.simulate('click');
    expect(wrapper.state().errors.name).toBe('Name of test must be at least 3 characters.');
  });
});
