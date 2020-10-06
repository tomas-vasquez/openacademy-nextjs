import React from "react";
import {
  Input,
  UncontrolledTooltip,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";
import _ from "lodash";
import Icons from "components/common/Icons";

const SingleSocialField = ({ name, defaultValue, isEditing }) => (
  <div className="form-group row showcase_row_area">
    <div className="col-md-4 text-md-right">
      <label className="h6">Enlace de {_.upperFirst(name)}:</label>
    </div>
    <div className="col-md-8 showcase_content_area">
      {isEditing ? (
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText style={{ width: 40 }}>
              <Icons icon={name} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            id={`input-${name}`}
            name={`link_${name}`}
            defaultValue={defaultValue}
            type="text"
          />
          <InputGroupAddon
            onClick={(e) => {
              window.open(
                document.getElementById(`input-${name}`).value,
                "blank"
              );
            }}
            id={`tooltip-${name}`}
            addonType="append"
            style={{ cursor: "pointer" }}
          >
            <InputGroupText>
              <Icons icon="external-link" />
            </InputGroupText>
          </InputGroupAddon>
          <UncontrolledTooltip delay={0} target={`tooltip-${name}`}>
            Provar enlace
          </UncontrolledTooltip>
        </InputGroup>
      ) : defaultValue && defaultValue !== "" ? (
        <a href={defaultValue}>{defaultValue}</a>
      ) : (
        <p>no definido</p>
      )}
    </div>
  </div>
);

export default SingleSocialField;
