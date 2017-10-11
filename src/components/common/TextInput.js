import React, {PropTypes} from 'react';
import {Translate} from 'react-redux-i18n';

const TextInput = ({name, label, onChange, placeholder, value, className, translateVal}) => {
  let wrapperClass = 'form-group ' + className;

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{translateVal ? <Translate value={translateVal}/> : label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
