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
    font-size: .7rem;
    font-weight: 300;
    opacity: .8;
    padding: 2px 0;;
  }

  label {
    position: relative;
    font-size: 0.85rem;
    opacity: 0.65;
    margin: 8px 0;
    display: inline-block;
    transition: .235s;
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
        background: #BED4CD;
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
    transition: .235s;
    transform: translateX(-100%);
    opacity: 0;
    border-radius: 10px;
  }

  &:hover::before {
    transform: translateX(5%);
    opacity: 1;
  }

  &:hover label {
    transform: scale(.95);
    color: #587D87;
  }

`;


export default function LogIn() {
  return (
    <LogInForm>
      <h2>Welcome back!</h2>
      <LabelDiv>
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName" required />
      </LabelDiv>
      <LabelDiv>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id="password" required />
      </LabelDiv>
      <SignUpBtn type="submit" name="login">
        Log In
      </SignUpBtn>
    </LogInForm>
  );
}
