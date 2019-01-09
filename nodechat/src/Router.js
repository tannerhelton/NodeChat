import React from "react";
import firebase from "firebase";
import { Scene, Router, Actions } from "react-native-router-flux";

import LoginForm from "./Components/LoginForm";
import ChatRoom from "./Components/ChatRoom";

const RouterComponent = () => {
  // firebase.auth().onAuthStateChanged(user => {
  //   if (!user) {
  //     Actions.chatRoom();
  //   }
  // });
  return (
    <Router hideNavBar>
      <Scene key="root" hideNavBar>
        <Scene initial key="login" component={LoginForm} hideNavBar />
        <Scene key="chatRoom" component={ChatRoom} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
