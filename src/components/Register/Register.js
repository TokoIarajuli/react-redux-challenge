import React from "react";
import "./Register.scss";
import { CountryDropdown } from "react-country-region-selector";

//God bless google
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      lastname: null,
      password: null,
      age: null,
      country: "",
      errors: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        age: ""
      }
    };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 2 ? "*Name must be at least 2 characters long!" : "";
        break;
      case "lastname":
        errors.lastname =
          value.length < 2
            ? "*Lastname must be at least 2 characters long!"
            : "";
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "*Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "*Password must be at least 8 characters long!"
            : "";
        break;
      case "age":
        errors.age = value < 18 ? "*You Should be more than 18" : "";
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      this.props.history.push("/addbooks");
    } else {
      alert("Invalid Form");
    }
  };

  render() {
    const { errors, country } = this.state;
    return (
      <div className="sign_up_form">
        <div className="sign_up_form_box">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              noValidate
            />
            {errors.name.length > 0 && <span>{errors.name}</span>}
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              noValidate
            />
            {errors.lastname.length > 0 && <span>{errors.lastname}</span>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              noValidate
            />
            {errors.email.length > 0 && <span>{errors.email}</span>}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              noValidate
            />
            {errors.password.length > 0 && <span>{errors.password}</span>}
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              onChange={this.handleChange}
              noValidate
            />
            {errors.age.length > 0 && <span>{errors.age}</span>}
            <label>Country</label>
            <CountryDropdown
              value={country}
              onChange={val => this.selectCountry(val)}
              required
              classes="inputs"
            />
            <label>Sex</label>
            <div>
              <input type="checkbox" id="male" />
              <label htmlFor="male">Male</label>
              <input type="checkbox" id="female" />
              <label htmlFor="female">Female</label>
              <input type="checkbox" id="helicopter" />
              <label htmlFor="helicopter">Helicopter</label>
            </div>
            <label htmlFor="about">About me</label>
            <textarea
              rows="4"
              cols="20"
              maxLength="100"
              placeholder="Max 100 characters"
            />
            <button>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
