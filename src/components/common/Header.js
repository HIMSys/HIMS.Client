import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Test</IndexLink>
      {" | "}
      <Link to="/test" activeClassName="active">Test</Link>
    </nav>
  );
};

export default Header;
