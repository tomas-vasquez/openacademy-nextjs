import Icons from "components/common/Icons";
import React from "react";

// reactstrap components
import { Button } from "reactstrap";

class SocialButtons extends React.Component {
  render() {
    let styles = {
      borderRadius: "50%",
      padding: 7,
      width: 40,
      height: 40,
      margin: 3,
    };
    return (
      <>
        <Button
          style={styles}
          color="primary"
          href={"mailto:" + this.props.data.email}
          target="_blank"
        >
          <Icons icon="envelope" />
        </Button>

        {this.props.data.whatsapp_number ? (
          <Button
            style={styles}
            color="primary"
            href={
              "https://api.whatsapp.com/send?phone=" +
              this.props.data.whatsapp_code_area +
              this.props.data.whatsapp_number
            }
            target="_blank"
          >
            <Icons icon="whatsapp" />
          </Button>
        ) : null}
        {this.props.data.link_facebook ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_facebook}
          >
            <Icons icon="facebook" />
          </Button>
        ) : null}
        {this.props.data.link_twitter ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_twitter}
            target="_blank"
          >
            <Icons icon="twitter" />
          </Button>
        ) : null}
        {this.props.data.link_instagram ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_instagram}
            target="_blank"
          >
            <Icons icon="instagram" />
          </Button>
        ) : null}
      </>
    );
  }
}

export default SocialButtons;
