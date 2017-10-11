import  React, {PropTypes} from 'react';
import  TestMessage from './TestMessage';
import TextInput from '../common/TextInput';
import {Translate} from 'react-redux-i18n';

class TestList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filterVal: ''
    }
  }

  render() {
    let testNodes = this.props.tests.map(function(testMsg) {
          return (
            <TestMessage name={testMsg.name} testId={testMsg.testId}
                         deleteTestRecord={this.props.deleteTestRecord}
                         key={testMsg.testId}>
              {testMsg.description}
            </TestMessage>
          );
    }, this);

    return (
      <table className="testList table table-striped">
        <thead>
					<tr>
            <th><Translate value="column.no" /></th>
						<th><Translate value="column.name" /></th>
						<th><Translate value="column.description" /></th>
            <th></th>
					</tr>
				</thead>
          <tbody>
            {testNodes}
          </tbody>
       </table>
    );
  }
}

TestList.propTypes = {
  tests: PropTypes.array.isRequired,
  deleteTestRecord: PropTypes.func.isRequired
};

export default TestList;
