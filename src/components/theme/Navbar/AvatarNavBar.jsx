import React from "react";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from "reactstrap";

import Controller_Users from "fetchers/Users";
import { apiLinks } from "../../../../site.config";
import Link from "next/link";
import Icons from "components/common/Icons";

class AvatarNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.user = new Controller_Users();
  }

  handleCloseSessionButtom = (e) => {
    e.preventDefault();
    this.user.logout();
  };

  render() {
    let pic_url;

    if (
      this.props.userData.blob_pic_url !== undefined &&
      this.props.userData.blob_pic_url
    ) {
      pic_url = this.props.userData.blob_pic_url;
    } else {
      if (this.props.userData.pic_url) {
        pic_url = this.props.userData.pic_url;
      } else {
        pic_url = "/img/noPic.jpg";
      }
    }

    return (
      <UncontrolledDropdown className="p-0">
        <DropdownToggle className="p-0 bg-transparent border-0">
          <Media className="align-items-center">
            <img
              className="avatar rounded-circle"
              alt={this.props.userData.user_name}
              style={{ width: 40, marginTop: -5 }}
              src={pic_url}
            />
            {!this.props.desktop && (
              <Media>
                <span className="mb-0 ml-2 text-muted d-md-none d-lg-block">
                  @{this.props.userData.user_name}
                </span>
                <span className="mb-0 ml-1 text-muted">
                  <i className="ml-1 fa fa-sort-down"></i>
                </span>
              </Media>
            )}
          </Media>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-arrow bg-white border-0" right>
          <DropdownItem style={{ cursor: "pointer" }}>
            <Link href={"/user?name=" + this.props.userData.user_name}>
              <div>
                <Icons icon="user" className="mr-2" />
                <span>Mi perfil</span>
              </div>
            </Link>
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem
            onClick={this.handleCloseSessionButtom}
            style={{ cursor: "pointer" }}
          >
            <Icons icon="sign-out" className="mr-2" />
            <span>Cerrar sesión</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default AvatarNavBar;
