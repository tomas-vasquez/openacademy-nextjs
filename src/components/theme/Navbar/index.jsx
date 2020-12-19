import DB from "helpers/db";
import React, { Component } from "react";
import { Collapse } from "reactstrap";
import AuthMenu from "./AuthMenu";
import Navigation from "./Navigation";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      open: false,
    };
  }

  scroollHandler = (e) => {
    const scroollTop = e.target.scrollingElement.scrollTop;
    if (scroollTop > 60) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scroollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroollHandler);
  }

  render() {
    const db = new DB();
    const userData = db.get("userData");

    return (
      <header
        id="topnav"
        className={
          this.state.sticky
            ? "defaultscroll sticky shadow nav-sticky"
            : "defaultscroll  sticky"
        }
      >
        <div className="container">
          <div>
            <a className="logo" href="index.html">
              <img
                src={require("../../../assets/images/logo-dark.png")}
                height="24"
                alt=""
              />
            </a>
          </div>
          <AuthMenu />
          <div className="menu-extras">
            <div className="menu-item">
              <a
                className={
                  this.state.open ? "navbar-toggle open" : "navbar-toggle"
                }
                onClick={() => this.setState({ open: !this.state.open })}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          <Collapse isOpen={this.state.open} id="navigation">
            <Navigation />
          </Collapse>
        </div>
      </header>
    );
  }
}
