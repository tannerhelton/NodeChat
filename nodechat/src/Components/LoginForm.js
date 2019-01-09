import React, { Component } from "react";
import firebase from "firebase";

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
    const { email, password } = this.state;

    this.setState({ loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          email: "",
          password: "",
          loading: false
        });
        Actions.retreats();
      })
      .catch(error => {
        this.setState({ loading: false });
        alert(error);
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
              <Label>Email</Label>
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
