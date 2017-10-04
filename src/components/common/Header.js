import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import ProgressBar from './ProgressBar';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {email: '', password: ''}
    };

    this.updateCredentialsState = this.updateCredentialsState.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.getLoginModule = this.getLoginModule.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  updateCredentialsState(event) {
    const field = event.target.name;
    let credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState( {credentials: credentials} );
  }

  onLogin(event) {
    event.preventDefault();
    this.props.login(this.state.credentials);
  }

  onLogout() {
    this.props.logout();
  }

  getLoginModule() {
    if (this.props.loginSuccess) {
      return (<button onClick={this.onLogout}
                        className="btn btn-danger navbar-btn navbar-right">
                  Log out
                </button>);
      } else {
        return (<form className="navbar-form navbar-right">
                        <div className="form-group">
                          <input type="text"
                                 name="email"
                                 className="form-control"
                                 placeholder="email"
                                 onChange={this.updateCredentialsState} />
                          <input type="password"
                                 name="password"
                                 className="form-control"
                                 placeholder="password"
                                 onChange={this.updateCredentialsState} />
                        </div>
                        <button type="submit"
                                onClick={this.onLogin}
                                className="btn btn-default">
                          Log in
                        </button>
                      </form>);
      }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">HIMS</IndexLink>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/test">Tests CRUD Grid</Link></li>
          </ul>
          {this.getLoginModule()}
        </div>
        {this.props.loading && <ProgressBar />}
      </nav>
    );
  }
}

Header.propTypes = {
  login: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
