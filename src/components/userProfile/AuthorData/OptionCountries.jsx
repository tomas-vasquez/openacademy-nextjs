import React from "react";

// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledTooltip,
} from "reactstrap";

import { onChangeNumber } from "helpers/input";
import { countrys as telephones } from "helpers/countrys";

class OptionCountries extends React.Component {
  testUrl(whatsapp_code_area, whatsapp_number) {
    window.open(
      "https://api.whatsapp.com/send?phone=" +
        whatsapp_code_area +
        whatsapp_number,
      "blank"
    );
  }

  render() {
    const listItems = telephones.map((telephone) => (
      <option
        key={telephone.iso_code}
        label={telephone.name + " +" + telephone.code}
        value={telephone.code}
      />
    ));

    return (
      <>
        <div className="form-group row showcase_row_area">
          <div className="col-md-4 text-right">
            <label className="h6" htmlFor="input90">
              WathsApp:
            </label>
          </div>
          <div className="col-md-8 showcase_content_area">
            {this.props.editing ? (
              <InputGroup style={{ flex: "auto" }}>
                <Input
                  id="input90"
                  onChange={this.handleChange}
                  type="select"
                  name="whatsapp_code_area"
                  defaultValue={this.props.whatsapp_code_area}
                  maxLength="15"
                  style={{ width: 100 }}
                >
                  {listItems}
                </Input>
                <Input
                  style={{ width: "auto" }}
                  type="phone"
                  name="whatsapp_number"
                  defaultValue={this.props.whatsapp_number}
                  placeholder="000-000-000"
                  onChangeCapture={onChangeNumber}
                />
                <InputGroupAddon
                  onClick={(e) =>
                    this.testUrl(
                      this.props.whatsapp_code_area,
                      this.props.whatsapp_number
                    )
                  }
                  id={"tooltip48783807893"}
                  addonType="append"
                  style={{ cursor: "pointer" }}
                >
                  <InputGroupText>
                    <i className="fa fa-external-link" />
                  </InputGroupText>
                </InputGroupAddon>
                <UncontrolledTooltip delay={0} target="tooltip48783807893">
                  Provar enlace
                </UncontrolledTooltip>
              </InputGroup>
            ) : this.props.whatsapp_number &&
              this.props.whatsapp_number !== "" ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  this.testUrl(
                    this.props.whatsapp_code_area,
                    this.props.whatsapp_number
                  );
                }}
              >
                {"+(" +
                  this.props.whatsapp_code_area +
                  ") " +
                  this.props.whatsapp_number}
              </a>
            ) : (
              <p>no definido</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default OptionCountries;
