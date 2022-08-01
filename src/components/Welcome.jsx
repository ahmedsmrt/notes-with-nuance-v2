import React from "react";
import styled from "styled-components";

const WelcomeSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap");

  position: relative;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;

  h1 {
    font-weight: 400;
    font-size: 3rem;
    margin: 0 0 2rem 0;
    text-align: center;
    line-height: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.25rem;
      line-height: 2.45rem;
      padding: 20px 15px;
    }
  }

  .btn-wrap {
    position: relative;
    margin: 0 auto;
    display: flex;
    gap: 20px;
  }
`;
const WelcomeBtn = styled.button`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
    background-color: #528876;
    color: white;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

export default function Welcome({ handleClick }) {
  return (
    <WelcomeSection >
      <h1>Welcome to Notes with Nuance</h1>
      <div className="btn-wrap">
        <WelcomeBtn onClick={handleClick} value="Log In">Log In</WelcomeBtn>
        <WelcomeBtn onClick={handleClick} value="Sign Up">Sign Up</WelcomeBtn>
      </div>
    </WelcomeSection>
  );
}


export { WelcomeBtn }