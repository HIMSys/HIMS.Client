import  React, {PropTypes} from 'react';
import TestList from './TestList';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testAction from '../../actions/testActions';

class TestBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      intervalId: NaN
    };

    this.deleteTestRecord = this.deleteTestRecord.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    let intervalId = setInterval(this.timer, 2000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    if(this.props.app.login) {
      this.props.actions.loadTests(this.props.filter);
    }
  }

  deleteTestRecord(testId) {
    this.props.actions.deleteTest(testId);
  }

  render() {
    return (
      <div className="testBox">
        <TestList tests={this.props.tests}
                  deleteTestRecord={this.deleteTestRecord}/>
      </div>
    );
  }
}

TestBox.propTypes = {
  tests: PropTypes.array.isRequired,
  deleteTestRecord: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tests: state.tests,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(testAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestBox);
