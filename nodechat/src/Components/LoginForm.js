import React, { Component } from "react";
import firebase from "firebase";
import { Chatkit } from "@pusher/chatkit-client";

import { StatusBar } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Text,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Form,
  Item,
  Footer,
  FooterTab,
  Label,
  Input,
  Spinner
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { Actions } from "react-native-router-flux";

class LoginForm extends Component {
  state = { email: "", password: "", loading: false };

  loginPress() {
    const chatkit = new Chatkit({
      instanceLocator: "v1:us1:8e47d89f-b3b4-4dfb-b898-10c4b82f20fc",
      key:
        "004619e5-4c38-49e1-8fcf-9772c0c433a4:UsShtrbJjJ+oqZT4ERUpxJScc/gqAHWK0LUPbum98KY="
    });

    chatkit.createUser({
      id: this.state.email,
      name: this.state.email
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return <Text> Login </Text>;
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
          </Form>
          <Button block primary onPress={this.loginPress.bind(this)}>
            {this.renderButton()}
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;
