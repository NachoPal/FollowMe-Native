import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Divider, Button, Container } from 'react-native-material-ui';
import { Input, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'


class AuthView extends Component {

  onButtonPress(){
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Input
          label="Email"
          placeholder="user@domain.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <Button raised primary text="Log in" onPress={this.onButtonPress.bind(this)}/>
      </View>
    );
  }
}

const mapsStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapsStateToProps,
  {emailChanged, passwordChanged, loginUser})
  (AuthView);