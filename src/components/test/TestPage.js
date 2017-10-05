import  React, {PropTypes} from 'react';
import TestBox from './TestBox';
import {Link} from 'react-router';
import TextInput from '../common/TextInput';

class TestPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filterVal: ''
    }

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(event) {
    let val = event.target.value;
    return this.setState({filterVal: val});
  }

  render() {
    return (
      <div className="container-fluid">
      <TextInput
          name="description"
          label="Filter Test by contains: "
          value={this.state.filterVal}
          onChange={this.onFilterChange}/>
        <Link className="btn btn-primary" to="/test/testmodal">
          Add new record
        </Link>
        <TestBox filter={this.state.filterVal}/>
        {this.props.children}
      </div>
    );
  }
}

TestPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default TestPage;
