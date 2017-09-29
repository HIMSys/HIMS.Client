import  React, {PropTypes} from 'react';
import TestList from './TestList';
import AddEditTestPopup from './AddEditTestPopup';
import {Link} from 'react-router';

class TestBox extends React.Component {
  render() {
    return (
      <div className="testBox">
      <Link className="btn btn-primary" to="/test/testmodal">
        Add new record
       </Link>
        <TestList tests={this.props.tests}
                  deleteTestRecord={this.props.deleteTestRecord}/>
      </div>
    );
  }
}

TestBox.propTypes = {
  tests: PropTypes.array.isRequired,
  deleteTestRecord: PropTypes.func.isRequired
};

export default TestBox;
