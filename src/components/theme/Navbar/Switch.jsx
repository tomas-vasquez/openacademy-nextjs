import Icons from "components/common/Icons";
import DB from "helpers/db";
import React, { Component } from "react";

export default class Switch extends Component {
  constructor() {
    super();
    this.state = {
      isDark: DB.get("isDark"),
    };
  }

  componentWillMount() {
    if (DB.get("isDark")) {
      document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
  }

  render() {
    return (
      <div className="menu-extras my-auto mx-2">
        <div className="menu-item">
          <input
            type="checkbox"
            className="checkbox"
            id="chk"
            onChange={() => {
              console.log("hola");
              if (this.state.isDark) {
                DB.set("isDark", false);
                this.setState({ isDark: false });
                document
                  .getElementsByTagName("body")[0]
                  .classList.remove("dark-mode");
              } else {
                document
                  .getElementsByTagName("body")[0]
                  .classList.add("dark-mode");
                DB.set("isDark", true);
                this.setState({ isDark: true });
              }
            }}
            checked={this.state.isDark}
          />
          <label className="label" htmlFor="chk">
            <div className="ball">
              <Icons icon="moon" className="moon" />
              <Icons icon="sun" className="sun" />
            </div>
          </label>
        </div>
      </div>
    );
  }
}
