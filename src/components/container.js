import React, { useState } from "react";
import Input from './input';

const Container = React.memo((props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [isValidFirstName, setIsValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [allValid, setAllValid] = useState(false);

  const clicked = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  const changeHandler = (inputControlName, event) => {
    const sanitizedValue = event.target.value.trim();
    switch(inputControlName){
      case 'firstName':{
        setFirstNameTouched(true);
        setFirstName(event.target.value);
        setIsValidFirstName(sanitizedValue.length >= 1);
        break;
      }
      case 'lastName': {
        setLastNameTouched(true);
        setLastName(event.target.value);
        setIsValidLastName(sanitizedValue.length >= 1);
        break;
      }
      case 'email':
        setEmailTouched(true);
        setEmail(event.target.value);
        setIsValidEmail(validateEmail(event.target.value));
        break;
      case 'password':
        setPasswordTouched(true);
        setPassword(event.target.value);
        console.log("isValidPassword", isValidPassword);
        console.log("!sanitizedValue", sanitizedValue);
        console.log("sanitizedValue.length < 1", sanitizedValue.length < 1);
        setIsValidPassword(sanitizedValue.length >= 1);
        break;
      default:
        return;
    }
    console.log("isValidEmail", isValidEmail);
    console.log("isValidFirstName", isValidFirstName);
    console.log("isValidLastName", isValidLastName);
    console.log("isValidPassword", isValidPassword);
    const isFormValid = isValidEmail && isValidFirstName && isValidLastName && isValidPassword;
    setAllValid(isFormValid);
  }

  const validateEmail = (emailValue) => {
    if (!emailValue) {
      return false;
    }
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(emailValue).toLowerCase());
    return isValid;
  }

  return (
    <div className="container">
      <div className="page-title">
        <h1>Learn to code by watching others</h1>
        <h4>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </h4>
      </div>
      <div className="form-pricing-wrapper">
        <div className="pricing">
          <span><strong>Try it free 7 days</strong> then $20/mo. thereafter</span>
        </div>
        <div className="form-wrapper">
          <form name="myForm" action="/" method="post">
            <Input
              type="text"
              inputId="firstName"
              name="firstName"
              aria="firstName"
              required={true}
              isValid={isValidFirstName}
              isTouched={firstNameTouched}
              value={firstName}
              placeholder="First Name"
              errorMessage="First Name cannot be empty"
              onChange={(e) => changeHandler("firstName", e)}
            />
            <Input
              type="text"
              inputId="lastName"
              name="lastName"
              aria="lastName"
              required={true}
              isValid={isValidLastName}
              value={lastName}
              isTouched={lastNameTouched}
              placeholder="Last Name"
              errorMessage="Last Name cannot be empty"
              onChange={(e) => changeHandler("lastName", e)}
            />
            <Input
              type="email"
              inputId="email"
              name="email"
              aria="email"
              required={true}
              isValid={isValidEmail}
              isTouched={emailTouched}
              value={email}
              placeholder="Email Address"
              errorMessage="Looks like this is not an email"
              onChange={(e) => changeHandler("email", e)}
            />
            <Input
              type="password"
              inputId="password"
              name="password"
              aria="password"
              required={true}
              isValid={isValidPassword}
              isTouched={passwordTouched}
              value={password}
              placeholder="Password"
              errorMessage="Password cannot be empty"
              onChange={(e) => changeHandler("password", e)}
            />
            <button
              className={`${allValid ? '' : 'disabled'}`}
              id="submitButton"
              name="submitButton"
              onClick={clicked}
              disabled={!allValid}
              aria-labelledby="submitButton"
            >
              Claim your free trial
            </button>
            <small>
              By clicking the button, you are agreeing to our <span className='red-text'>Terms and Services</span>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Container;
