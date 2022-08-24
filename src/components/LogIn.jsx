import React from "react";
import styled from "styled-components";
import { WelcomeBtn } from "./Welcome";

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  width: 90%;

  h2 {
    text-align: center;
    margin: 25px 0px;
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
    font-size: 0.85rem;
    opacity: 0.65;
    margin: 8px 0;
    display: inline-block;
    transition: 0.235s;
  }

  label::before {
    position: absolute;
    content: "";
    width: 100%;
    background-color: black;
    bottom: 10%;
  }
`;

const SignUpBtn = styled(WelcomeBtn)`
  padding: 3px 10px;
  margin: 45px;

  &:hover {
    background: #bed4cd;
    color: white;
  }
`;

const LabelDiv = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 1px;
    background: #528876;
    top: 25px;
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

export default function LogIn() {
  const [formData, setFormData] = React.useState({
    userName: "",
    password: "",
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
    console.log(formData);
  }

  return (
    <LogInForm onSubmit={handleSubmit}>
      <h2>Welcome back!</h2>
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
      <SignUpBtn type="submit" name="login">
        Log In
      </SignUpBtn>
    </LogInForm>
  );
}
