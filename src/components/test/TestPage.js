import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testAction from '../../actions/testActions';
import TestBox from './TestBox';

class TestPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deleteTestRecord = this.deleteTestRecord.bind(this);
  }

  deleteTestRecord(testId) {
    this.props.actions.deleteTest(testId);
  }

  render() {
    return (
      <div className="container-fluid">
        <TestBox tests={this.props.tests} deleteTestRecord={this.deleteTestRecord}/>
        {this.props.children}
      </div>
    );
  }
}

TestPage.propTypes = {
  tests: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
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
