import  React, {PropTypes} from 'react';

class TestMessage extends React.Component {
  render() {
    return (
      <tr className="testMsg">
        <td className="testId">
          {this.props.testId}
        </td>
        <td className="name">
          {this.props.name}
        </td>
        <td className="description">
          {this.props.children}
        </td>
        <td className="edit">
          <button className="btn btn btn-success">Edit</button>
        </td>
        <td className="delete col-md-4">
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

TestMessage.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired
};

export default TestMessage;
