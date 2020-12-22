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
      <div className="my-3">
        <input
          type="checkbox"
          class="checkbox"
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
        <label class="label" for="chk">
          <div class="ball">
            <Icons icon="moon" className="moon" />
            <Icons icon="sun" className="sun" />
          </div>
        </label>
      </div>
    );
  }
}
