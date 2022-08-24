import React from "react";
import styled from "styled-components";
import { WelcomeBtn } from "./Welcome";
const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 40px 0px;
    font-weight: 300;
  }

  input {
    border-radius: 15px;
    outline: none;
    border: none;
    width: 100%;
    text-indent: 10px;
    font-size: 0.7rem;
    font-weight: 300;
    opacity: 0.8;
    padding: 2px 0;
  }
  label {
    position: relative;
    font-size: 0.75rem;
    opacity: 0.65;
    margin: 5px 0;
    display: inline-block;
  }

  label::before {
    position: absolute;
    content: "";
    width: 100%;
    background-color: black;
    bottom: 10%;
  }

  .name {
    display: flex;
    gap: 15px;
  }
`;

const SignUpBtn = styled(WelcomeBtn)`
  padding: 3px 10px;
  margin: 30px;
  &:hover {
    background: #bed4cd;
    color: #fff;
  }
`;

const LabelDiv = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 0.75px;
    background: #528876;
    top: 22px;
    transition: 0.235s;
    transform: translateX(-100%);
    opacity: 0;
    border-radius: 10px;
  }

  &:hover::before {
    transform: translateX(5%);
    opacity: 1;
  }

  &:hover label {
    transform: scale(0.95);
    color: #587d87;
  }
`;

const SpecalLabelDiv = styled(LabelDiv)`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 28px;
    height: 0.75px;
    background: #528876;
    top: 22px;
    transition: 0.235s;
    transform: translateX(-100%);
    opacity: 0;
    border-radius: 10px;
  }

  &:hover::before {
    transform: translateX(5%);
    opacity: 1;
  }

  &:hover label {
    transform: scale(0.95);
    color: #587d87;
  }
`;

export default function SignUp({}) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    }).then(()=> {
      console.log("New User Added!")
    })

    console.log(formData);
  }

  return (
    <UserForm onSubmit={handleSubmit}>
      <h2>Sign up to start writing your first nuanced note!</h2>
      <div className="name">
        <div className="firstname">
          <LabelDiv>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={formData.firstName}
              required
            />
          </LabelDiv>
        </div>
        <div className="lastname">
          <LabelDiv>
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              value={formData.lastName}
              type="text"
              name="lastName"
              required
            />
          </LabelDiv>
        </div>
      </div>
      <LabelDiv>
        <label htmlFor="userName">User Name</label>
        <input
          onChange={handleChange}
          value={formData.userName}
          type="text"
          name="userName"
          required
        />
      </LabelDiv>
      <SpecalLabelDiv>
        <label htmlFor="email">Email </label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          required
        />
      </SpecalLabelDiv>
      <LabelDiv>
        <label htmlFor="password">Password </label>
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
          required
        />
      </LabelDiv>
      <LabelDiv>
        <label htmlFor="password">Confirm Password </label>
        <input
          onChange={handleChange}
          value={formData.confirmPassword}
          type="password"
          name="confirmPassword"
          required
        />
      </LabelDiv>
      <SignUpBtn type="submit" name="signup">
        Sign Up
      </SignUpBtn>
    </UserForm>
  );
}
