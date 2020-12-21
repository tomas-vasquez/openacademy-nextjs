import Invitation from "components/common/Invitation";
import React, { Component } from "react";
import Banner from "./Banner";
import Description from "./Description";
import MoreCourses from "./MoreCourses";

export default class extends Component {
  render() {
    return (
      <>
        <Banner {...this.props} />
        <Description {...this.props} />
        <MoreCourses {...this.props} />
        <Invitation />
      </>
    );
  }
}
