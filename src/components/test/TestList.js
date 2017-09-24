import  React, {PropTypes} from 'react';
import  TestMessage from './TestMessage';

class TestList extends React.Component {
  render() {
    let testNodes = this.props.tests.map(function(testMsg) {
          return (
            <TestMessage name={testMsg.Name} testId={testMsg.TestId}
                         key={testMsg.TestId}>
              {testMsg.Description}
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
  tests: PropTypes.array.isRequired
};

export default TestList;
