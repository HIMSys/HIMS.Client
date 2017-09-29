import  React, {PropTypes} from 'react';
import  TestMessage from './TestMessage';

class TestList extends React.Component {
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
            <th>#</th>
						<th>Name</th>
						<th>Description</th>
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
