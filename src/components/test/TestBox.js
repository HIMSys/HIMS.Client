import  React, {PropTypes} from 'react';
import TestList from './TestList';

class TestBox extends React.Component {
  render() {
    return (
      <div className="testBox">
        <TestList tests={this.props.tests} />
      </div>
    );
  }
}

TestBox.propTypes = {
  tests: PropTypes.array.isRequired
};

export default TestBox;
