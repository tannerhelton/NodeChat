import React from "react";
import firebase from "firebase";
import {Scene, Router, Actions} from "react-native-router-flux";

import LoginForm from "./Components/LoginForm";
import MyChat from "./Components/MyChat";

const RouterComponent = () => {
  return (
    <Router hideNavBar>
      <Scene key="root" hideNavBar>
        <Scene initial key="login" component={LoginForm} hideNavBar />
        <Scene key="chatRoom" component={MyChat} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
