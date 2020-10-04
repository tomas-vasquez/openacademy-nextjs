import React from "react";

import { Link } from "next/link";
import { replace } from "connected-react-router/lib/actions";
import { setTargetUrl } from "store/app_store/actions";
import { connect } from "react-redux";

// reactstrap components
import { Navbar } from "reactstrap";

import { myRoutes } from "config";
import DB from "helpers/db";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
    this.db = new DB();
  }

  handleCloseSessionButtom = (e) => {
    e.preventDefault();
    this.user.logout();
  };

  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };

  openRegisterPage = (e) => {
    e.preventDefault();
    this.props.setTargetUrl(document.location.pathname);
    this.props.replace(myRoutes.register);
  };

  openLoginPage = (e) => {
    e.preventDefault();
    this.props.setTargetUrl(document.location.pathname);
    this.props.replace(myRoutes.login);
  };

  render() {
    return (
      <>
        <Navbar
          className="py-2"
          style={{ backgroundColor: "#29303b" }}
          expand="md"
        >
          <div className="navbar-wrapper">
            <Link to="/">
              {/* <img src="" alt="" /> */}
              <h1 className="h3 text-white">Vikings</h1>
            </Link>
          </div>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setTargetUrl: (targetUrl) => dispatch(setTargetUrl(targetUrl)),
  replace: (newLocation) => dispatch(replace(newLocation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar);
