import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testAction from '../../actions/testActions';
import TestBox from './TestBox';

class TestPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <TestBox tests={this.props.tests} />
    );
  }
}

TestPage.propTypes = {
  tests: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tests: state.tests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(testAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
