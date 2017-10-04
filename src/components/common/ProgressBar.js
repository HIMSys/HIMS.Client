import React, {PropTypes} from 'react';

const ProgressBar = ({height}) => {
  return (
    <div className="progressBar" style={{height: height+'px'}}/>
  );
};

ProgressBar.defaultProps = {
  height: 8
};

ProgressBar.propTypes = {
  height: PropTypes.number.isRequired
};

export default ProgressBar;
