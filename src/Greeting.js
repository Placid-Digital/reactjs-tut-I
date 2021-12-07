import React from 'react';
import ReactDOM from 'react-dom';


// This is Function
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
//This is second Function
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }



// This is main Function with Js File name
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

    


  export default Greeting