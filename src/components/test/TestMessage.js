import  React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Translate} from 'react-redux-i18n';


class TestMessage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete () {
    this.props.deleteTestRecord(this.props.testId);
  }

  render() {
    const editLink = '/test/testmodal/' + this.props.testId;

    return (
      <tr className="testMsg">
        <td className="testId">
          {this.props.testId}
        </td>
        <td className="name">
          <Link to={editLink}>
             {this.props.name}
          </Link>
        </td>
        <td className="description">
          {this.props.children}
        </td>
        <td className="delete col-md-4">
          <button className="btn btn-danger"
                  onClick={this.onDelete}>
            <Translate value="button.delete" />
          </button>
        </td>
      </tr>
    );
  }
}

TestMessage.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  deleteTestRecord: PropTypes.func.isRequired
};

export default TestMessage;
