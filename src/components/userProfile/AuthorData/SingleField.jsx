import React from "react";
import { Input } from "reactstrap";

const SingleField = ({
  name,
  label,
  defaultValue,
  isEditing,
  onChange,
  disabled,
}) => (
  <div className="form-group row showcase_row_area">
    <div className="col-md-4 text-right">
      <label className="h6" htmlFor="input30">
        {label}:
      </label>
    </div>
    <div className="col-md-8 showcase_content_area">
      {isEditing ? (
        <Input
          disabled={disabled}
          name={name}
          defaultValue={defaultValue}
          type="text"
          onChange={onChange}
          minLength="8"
          maxLength="60"
          required
        />
      ) : defaultValue && defaultValue !== "" ? (
        <p>{defaultValue}</p>
      ) : (
        <p>no definido</p>
      )}
    </div>
  </div>
);

export default SingleField;
