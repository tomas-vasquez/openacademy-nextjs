import React from "react";

// reactstrap components
import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  Button,
  Collapse,
  // Container,
} from "reactstrap";

import { nameChangedHandler } from "helpers/input";
// import Controller_Profile from "fetchers/Profile";

import OptionCountries from "./OptionCountries";
import ProfileCard from "./ProfileCard";
import SingleField from "./SingleField";
import SingleSocialField from "./SingleSocialField";
import DescriptionField from "./DescriptionField";
import DB from "helpers/db";
import Icons from "components/common/Icons";

class AuthorData extends React.Component {
  constructor(props) {
    super();
    this.state = { profile: props.profile };
    // this.fetcher = new Controller_Profile();
  }

  handlePicPicker = (e) => {
    const file = e.target.files[0];
    // this.fetcher.handle_pic_selected(file, (newData) => {
    //   this.setState({ profile: newData });
    // });
  };

  handleDataUpdate = (e) => {
    e.preventDefault();
    // this.fetcher.updateUserData(e.target, (newProfile) => {
    //   this.setState({ profile: newProfile });
    // });
  };

  render() {
    let profile = this.state.profile;
    let editable =
      DB.get("userData") && DB.get("userData").user_name === profile.user_name;

    return (
      <>
        <ProfileCard
          profile={profile}
          editable={editable}
          handlePicPicker={this.handlePicPicker}
        />

        <Card className="shadow-md mb-4">
          {/* <CardHeader className="py-2 px-3">
            <CardTitle tag="h5" className="m-0 d-flex">
              <span>
                <Icons icon="user" className="mr-2" />
                Datos del perfíl
              </span>
            </CardTitle>
          </CardHeader> */}
          <CardBody>
            <form onSubmit={this.handleDataUpdate} id="form-user-data">
              <h5 className="heading-small text-muted mb-4">
                Información principal:
              </h5>

              <SingleField
                disabled
                label="Nombre de cuenta"
                defaultValue={`@${profile.user_name}`}
                isEditing={editable}
              />
              <SingleField
                disabled
                label="Correo electronico"
                defaultValue={profile.email}
                isEditing={editable}
              />
              <SingleField
                name="name"
                label="Nombre completo"
                defaultValue={profile.name}
                isEditing={editable}
                onChange={nameChangedHandler}
              />

              <hr className="my-4" />
              <h5 className="heading-small text-muted mb-4">Redes Sociales:</h5>

              <OptionCountries
                editing={editable}
                parent_reference={this}
                whatsapp_number={profile.whatsapp_number}
                whatsapp_code_area={profile.whatsapp_code_area}
              />

              <SingleSocialField
                name="facebook"
                defaultValue={profile.link_facebook}
                isEditing={editable}
              />
              <SingleSocialField
                name="twitter"
                defaultValue={profile.link_twitter}
                isEditing={editable}
              />
              <SingleSocialField
                name="instagram"
                defaultValue={profile.link_instagram}
                isEditing={editable}
              />

              <DescriptionField
                defaultValue={profile.description}
                defaultValue2={profile.short_description}
                isEditing={editable}
              />

              <Collapse isOpen={editable}>
                <div className="text-center">
                  <Button type="submit" className="my0" color="primary">
                    Guardar cambios <i className="fa fa-save mr-2"></i>
                  </Button>
                </div>
              </Collapse>
            </form>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default AuthorData;
