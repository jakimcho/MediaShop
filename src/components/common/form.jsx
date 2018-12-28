import React, { Component } from "react";
import Input from "./input";
import DropDown from "./dropDown";
import Joi from "joi-browser";

class Form extends Component {
  constructor(props, buttonName) {
    super(props);
    this.buttonName = buttonName;
    this.state = { data: {}, errors: {} };
  }

  render() {
    return (
      <form className="justify-content-center" onSubmit={this.handleSubmit}>
        {this.renderFields()}
        {this.renderSubmitButton()}
      </form>
    );
  }

  renderFields = () => {
    const schema = this.getCurrentSchema();
    const { data, errors } = this.state;
    let rowKey = 0;
    let colKey = 0;

    return schema.map(row => (
      <div
        key={"row-id-" + rowKey++}
        className="form-row justify-content-center"
      >
        {row.map(input => {
          const inputsProps = {
            key: "col-id-" + colKey++,
            onChange: this.handleAllFieldsChange,
            onBlur: this.handleLoseFocus,
            value: data[input.name],
            error: errors[input.name],
            ...input
          };
          if (input.type && input.type === "select") {
            return <DropDown {...inputsProps} />;
          } else {
            return <Input {...inputsProps} />;
          }
        })}
      </div>
    ));
  };

  renderSubmitButton = () => {
    return (
      <button type="submit" className="btn btn-primary">
        {this.buttonName}
      </button>
    );
  };

  handleAllFieldsChange = async ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    await this.setState({ data }); // this totally suprized me
    this.validateInput(input);
  };

  handleLoseFocus = ({ currentTarget: input }) => {
    this.validateInput(input);
  };

  validateInput = ({ name }) => {
    const errors = { ...this.state.errors };
    const { data } = this.state;
    const validateOptions = { abortEarly: false };
    const schema = this.getValidationSchema();

    delete errors[name];

    const { error } = Joi.validate(data, schema, validateOptions);
    if (error) {
      error.details.forEach(errorDetail => {
        if (errorDetail.context.key === name) {
          errors[errorDetail.context.key] = errorDetail.message;
        }
      });
    }

    this.setState({ errors });
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    const validateOptions = { abortEarly: false };
    const schema = this.getValidationSchema();

    const { error } = Joi.validate(data, schema, validateOptions);
    if (error) {
      error.details.forEach(errorDetail => {
        errors[errorDetail.context.key] = errorDetail.message;
      });
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  getValidationSchema = () => {
    // Override this method in Class siblings;
    return null;
  };

  getCurrentSchema = () => {
    // Override this method in Class siblings;
    return null;
  };

  handleSubmit = () => {
    // Override this method in Class siblings;
    return null;
  };
}

export default Form;
