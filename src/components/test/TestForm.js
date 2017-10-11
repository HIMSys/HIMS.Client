import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import {I18n} from 'react-redux-i18n';

const TestForm = ({test, onChange}) => {
  return (
    <form>
      <TextInput
        name="name"
        label={I18n.t('column.name')}
        value={test.name}
        onChange={onChange}/>

      <TextInput
        name="description"
        label={I18n.t('column.description')}
        value={test.description}
        onChange={onChange}/>
    </form>
  );
};

TestForm.propTypes = {
  test: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TestForm;
