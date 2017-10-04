import  React, {PropTypes} from 'react';
import Header from './common/Header';
import * as appActions from '../actions/appActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(credentials) {
    this.props.actions.loginApp(credentials);
  }

  logout() {
    this.props.actions.logoutApp();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header login={this.login}
                logout={this.logout}
                loginSuccess={this.props.app.login}
                loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  app: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    app: state.app,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
