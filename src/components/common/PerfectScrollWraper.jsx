import React from "react";
import PerfectScrollbar from "perfect-scrollbar";

var ps;

class PerfectScrollWraper extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.myRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
        swipeEasing: false,
        wheelSpeed: 2,

        ...this.props.options,
      });
    }
    window.addEventListener("resize", () => {
      ps.update();
    });
  }

  componentDidUpdate() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.myRef.current.scrollTop = 0;
    ps.update();
  }

  render = () => {
    return (
      <div
        id="scroll-container"
        className="p-0 m-0"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
        ref={this.myRef}
      >
        {this.props.children}
      </div>
    );
  };
}

export default PerfectScrollWraper;
