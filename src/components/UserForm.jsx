import React, { useState } from "react";
import styled from "styled-components";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const UserDiv = styled.div`
    width: 375px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-radius: 10px 10px 25px 25px;
    position: relative;
    background-color: whitesmoke;

    &::before {
      content: "";
      position: absolute;
      bottom: -2%;
      left: 2.5%;
      width: 95%;
      height: 10%;
      background: rgba(0,0,0,0.3);
      z-index: -1;
      filter: blur(10px);
    }

    .user-selection {
      height: 45px;
      background-color: aliceblue;
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0 auto;
    }

    .user-selection > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      cursor: pointer;
    }

    .user-selection > div:hover {
      background-color: #528876b2;
    }

    .login {
      background: ${({bgSelectedColor}) => (bgSelectedColor == "Log In" ? '#528876' : "Aliceblue")};
      border-top-left-radius: 10px;
    }

    .signup {
      background: ${({bgSelectedColor}) => (bgSelectedColor == "Sign Up" ? '#528876' : "Aliceblue")};
      border-top-right-radius: 10px;
    }

    form {
      flex: 3;
      padding: 0px 50px;
      justify-content: center;
      margin-bottom: 40px;
    }
    

`




export default function UserForm({formState}) {
  const [userTabState, setUserTabState] = useState(formState)

  const handleFormState =(e) => {
    setUserTabState(e.target.innerHTML)
    console.log(userTabState)
  }

  return (
    <UserDiv bgSelectedColor={userTabState}>
      <div className="user-selection" >
        <div className="login" onClick={handleFormState}  >Log In</div>
        <div className="signup" onClick={handleFormState}>Sign Up</div>
      </div>
      {userTabState === "Log In" ?  <LogIn /> : <SignUp />}
    </UserDiv>
  );
}
