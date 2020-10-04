import React, { Component } from "react";

import Particles from "react-particles-js";

export default class particles extends Component {
  constructor() {
    super();
    this.state = {
      width: 1,
      height: 0,
    };
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }

  ruleTreeSimple(a, b, c) {
    return Math.abs((b * c) / a);
  }

  render() {
    return (
      <div
        id="home"
        style={{
          zIndex: -100,
        }}
        className="fixed-top bgstyle m-0"
      >
        <Particles
          height={this.state.height}
          width={this.state.width}
          params={{
            pauseOnBlur: true,
            particles: {
              number: {
                value: this.ruleTreeSimple(1000, 60, this.state.width),
              },
              size: {
                value: 3,
              },
              opacity: {
                value: 0.2,
              },
              line_linked: {
                opacity: 0.1,
              },
              move: {
                speed: 1,
              },
            },
          }}
        />
      </div>
    );
  }
}
