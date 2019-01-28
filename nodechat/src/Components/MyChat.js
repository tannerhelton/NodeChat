import React from "react";
import {GiftedChat} from "react-native-gifted-chat";
import {ChatManager, TokenProvider} from "@pusher/chatkit-client";
import LoginForm from "./LoginForm";

const CHATKIT_TOKEN_PROVIDER_ENDPOINT =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8e47d89f-b3b4-4dfb-b898-10c4b82f20fc/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:8e47d89f-b3b4-4dfb-b898-10c4b82f20fc";
const CHATKIT_ROOM_ID = "19377364";
const CHATKIT_USER_NAME = "Tanner";

export default class MyChat extends React.Component {
  state = {
    messages: []
  };

  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: CHATKIT_ROOM_ID
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };

  onReceive = data => {
    const {id, senderId, text, createdAt} = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA"
      }
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage)
    }));
  };

  componentDidMount() {
    console.log("Test info: " + this.props.userName);
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: this.props.userName,
      tokenProvider: tokenProvider
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: this.onReceive
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.props.userName
        }}
      />
    );
  }
}
