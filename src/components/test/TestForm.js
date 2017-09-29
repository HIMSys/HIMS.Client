import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const TestForm = ({test, onChange}) => {
  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        value={test.name}
        onChange={onChange}/>

      <TextInput
        name="description"
        label="Description"
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
