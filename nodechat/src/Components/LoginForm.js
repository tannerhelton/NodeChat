import React, {Component} from "react";
import {StatusBar} from "react-native";
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
import {Col, Row, Grid} from "react-native-easy-grid";

import {Actions} from "react-native-router-flux";

class LoginForm extends Component {
  state = {name: ""};

  loginPress() {
    console.log(this.state.name);
    Actions.chatRoom({userName: this.state.name});
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
                value={this.state.name}
                onChangeText={name => this.setState({name})}
              />
            </Item>
          </Form>
          <Button block primary onPress={this.loginPress.bind(this)}>
            <Text> Login </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;
