import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, options, className}) => {
  return (
    <div className={className}>
      {(label !== "") && <label htmlFor={name}>{label}</label>}
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          {options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
          }
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
