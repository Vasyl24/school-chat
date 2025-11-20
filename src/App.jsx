// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
// import SignIn from './pages/SignIn/SignIn';
// import MainSignIn from './pages/MainSignIn/MainSignIn';
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
// import EnterCode from './pages/EnterCode/EnterCode';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import { Container } from './styles/container';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        {/* <MainSignIn /> */}
        {/* <SignIn /> */}
        {/* <ForgotPassword /> */}
        {/* <EnterCode /> */}
        <ChangePassword />
      </Container>
    </>
  );
}

export default App;
