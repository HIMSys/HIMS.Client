import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testAction from '../../actions/testActions';
import TestBox from './TestBox';

class TestPage extends React.Component {
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
      this.props.actions.loadTests();
    }
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
    tests: state.tests,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(testAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
