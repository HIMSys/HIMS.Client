import  React, {PropTypes} from 'react';
import TestBox from './TestBox';
import {Link} from 'react-router';
import TextInput from '../common/TextInput';
import {Translate} from 'react-redux-i18n';

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
        <Link className="btn btn-primary" to="/test/testmodal">
          <Translate value="button.addTest"/>
        </Link>
        <TextInput
            className="filter"
            name="description"
            translateVal="label.testNameFilter"
            value={this.state.filterVal}
            onChange={this.onFilterChange}/>
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
