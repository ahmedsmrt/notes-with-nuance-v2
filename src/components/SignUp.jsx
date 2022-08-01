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
    font-size: .7rem;
    font-weight: 300;
    opacity: .8;
    padding: 2px 0;;
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
    height: .75px;
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
    height: .75px;
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

`

export default function SignUp({}) {
  return (
    <UserForm>
      <h2>Sign up to start writing your first nuanced note!</h2>
      <div className="name">
        <div className="firstname">
          <LabelDiv>
            <label htmlFor="firstName" name="firstName" id="firstName" required>
              First Name
            </label>
            <input type="text" />
          </LabelDiv>
        </div>
        <div className="lastname">
          <LabelDiv>
            <label htmlFor="lastName" name="lastName" id="lastName" required>
              Last Name
            </label>
            <input type="text" />
          </LabelDiv>
        </div>
      </div>
      <LabelDiv>
        <label htmlFor="userName" name="userName" id="userName" required>
          User Name
        </label>
        <input type="text" />
      </LabelDiv>
      <SpecalLabelDiv>
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" required />
      </SpecalLabelDiv>
      <LabelDiv>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id="password" required />
      </LabelDiv>
      <LabelDiv>
        <label htmlFor="password">Confirm Password </label>
        <input type="password" name="password" id="confirmPassword" required />
      </LabelDiv>
      <SignUpBtn type="submit" name="signup">
        Sign Up
      </SignUpBtn>
    </UserForm>
  );
}
