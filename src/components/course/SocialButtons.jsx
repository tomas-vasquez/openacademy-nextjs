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
          <i className="fa fa-envelope" />
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
            <i className="fa fa-whatsapp" />
          </Button>
        ) : null}
        {this.props.data.link_facebook ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_facebook}
          >
            <i className="fa fa-facebook" />
          </Button>
        ) : null}
        {this.props.data.link_twitter ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_twitter}
            target="_blank"
          >
            <i className="fa fa-twitter" />
          </Button>
        ) : null}
        {this.props.data.link_instagram ? (
          <Button
            style={styles}
            color="primary"
            href={this.props.data.link_instagram}
            target="_blank"
          >
            <i className="fa fa-instagram" />
          </Button>
        ) : null}
      </>
    );
  }
}

export default SocialButtons;
