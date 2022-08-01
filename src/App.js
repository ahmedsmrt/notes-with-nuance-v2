import { useState } from "react";
import styled from "styled-components";
import UserForm from "./components/UserForm";
import Welcome from "./components/Welcome";

const MainTheme = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  const [welcomeText, setWelcomeText] = useState(true)
  const [userFormState, setUserFormState] = useState("")

  const handleClick = (e) => {
    let userFormClicked = e.target.value;
    setWelcomeText(false)
    setUserFormState(userFormClicked)
    console.log(userFormClicked)

  }


  return (
    <MainTheme>
      {welcomeText ? <Welcome handleClick={handleClick} /> : <UserForm  formState={userFormState} />}
    </MainTheme>
  );
}

export default App;
