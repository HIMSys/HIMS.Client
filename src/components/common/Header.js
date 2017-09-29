import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink className="navbar-brand" to="/">HIMS</IndexLink>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/test">Tests CRUD Grid</Link></li>
        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="email" />
            <input type="text" className="form-control" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
