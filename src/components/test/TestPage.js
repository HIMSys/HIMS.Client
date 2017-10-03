import  React, {PropTypes} from 'react';
import TestBox from './TestBox';
import {Link} from 'react-router';

class TestPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Link className="btn btn-primary" to="/test/testmodal">
          Add new record
        </Link>
        <TestBox />
        {this.props.children}
      </div>
    );
  }
}

TestPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default TestPage;
