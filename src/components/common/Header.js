import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProgressBar from './ProgressBar';
import SelectInput from './SelectInput';
import languages from '../../localization/languages';
import * as appActions from '../../actions/appActions';
import {languagesFormattedForDropdown} from '../../selectors/selectors';
import {Translate} from 'react-redux-i18n';

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
    this.onLocalizationChange = this.onLocalizationChange.bind(this);
  }

  onLocalizationChange(event) {
    const languageId = event.target.value;
    this.props.actions.languageChange(languageId);
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
                        className="btn btn-danger navbar-btn">
                  <Translate value="head.logout" />
                </button>);
      } else {
        return (<form className="navbar-form">
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
                            <Translate value="head.login" />
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
            <li className="active"><Link to="/test">
              <Translate value="head.testsLabel" />
            </Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {this.getLoginModule()}
            </li>
            <li>
              <SelectInput
                className="languageSelector"
                name="localization"
                label=""
                value={this.props.languageId}
                options={languagesFormattedForDropdown(languages)}
                onChange={this.onLocalizationChange}/>
            </li>
          </ul>
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

function mapStateToProps(state, ownProps) {
  return {
    languageId: state.i18n.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
