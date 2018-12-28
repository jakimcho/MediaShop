import Form from "../common/form";
import React from "react";
import { countries } from "../../services/utils";
import userServices from "../../services/userServices";
import Joi from "joi-browser";

class RegistrationForm extends Form {
  constructor(props) {
    super(props, "register");
    this.state = {
      data: {
        email: "",
        firstName: "",
        sirName: "",
        password: "",
        confirmPassword: "",
        city: "",
        country: "",
        zip: "",
        address: ""
      },
      errors: {}
    };
  }

  render() {
    return (
      <div className="content">
        <p>&nbsp;</p>
        <div className="card">
          <h5 className="card-header info-color white-text text-center py-3">
            <strong>Sign up</strong>
          </h5>
          <br />
          <div className="card-body px-lg-5 pt-0">{super.render()}</div>
        </div>
      </div>
    );
  }

  handleSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); //never set it to undefined
    if (errors) {
      console.log("Sorry bro, you have errors");
      return;
    }

    try {
      await userServices.register(this.state.data);
      window.location = "/";
    } catch (ex) {
      console.log("Error while trying to register user ", ex);
      const errors = { ...this.state.errors };
      errors.message = ex.data;
    }
  };

  getCurrentSchema = () => {
    const schema = [
      [{ type: "email", name: "email", cols: 8 }],
      [
        { type: "password", name: "password", cols: 4, heigh: "500" },
        { type: "password", name: "confirmPassword", cols: 4 }
      ],
      [
        { type: "text", name: "firstName", cols: 4 },
        { type: "text", name: "sirName", cols: 4 }
      ],
      [
        { type: "text", name: "city", cols: 3 },
        { type: "select", name: "country", options: countries, cols: 3 },
        { type: "text", name: "zip", cols: 2 }
      ],
      [{ type: "text", name: "address", cols: 8 }]
    ];

    return schema;
  };

  getValidationSchema = () => {
    const userSchema = {
      firstName: Joi.string()
        .min(3)
        .max(12)
        .label("First Name")
        .required(),
      sirName: Joi.string()
        .min(3)
        .max(12)
        .label("Sir Name")
        .required(),
      password: Joi.string()
        .min(5)
        .max(12)
        .label("Password")
        .required(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .options({
          language: {
            any: {
              allowOnly: "does not match"
            }
          }
        })
        .label("Confirm Password")
        .required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .label("Email")
        .required(),
      city: Joi.string()
        .min(3)
        .max(12)
        .label("City")
        .required(),
      country: Joi.string()
        .min(3)
        .max(30)
        .label("Country")
        .required(),
      zip: Joi.string()
        .min(4)
        .max(5)
        .label("Zip")
        .required(),
      address: Joi.string()
        .min(0)
        .max(256)
        .allow("")
        .label("Address")
    };

    return userSchema;
  };
}

export default RegistrationForm;
