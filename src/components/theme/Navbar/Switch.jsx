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
      <div>
        <input
          className="l"
          type="checkbox"
          defaultChecked={!this.state.isDark}
          onClick={() => {
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
        />
      </div>
    );
  }
}

// export default function Switch() {
//   const [isDark, setisDark] = useState(DB.get("isDark") || false);
//   useEffect(() => {
//     return () => {
//       if (isDark) {
//         document.getElementsByTagName("body")[0].classList.add("dark-mode");
//       }
//     };
//   }, []);
// }
