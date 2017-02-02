import React, { Component } from 'react';
import { Text, View, Modal, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Card, Divider, Button, Container } from 'react-native-material-ui';
import { Input, Spinner } from './common';
import { connect } from 'react-redux'
import {
  userNameChanged,
  emailChanged,
  passwordChanged,
  signupUser,
  push,
} from '../actions'
import t from 'tcomb-form-native'
import { UserSignup, UserSignupOptions } from '../initializers/formModels'
import { addFormFieldsActionCreators } from '../helpers/methods'


class SignUpScene extends Component {

  onChange(){
    if (this.props.tried) {
      Object.keys(this.refs.form.refs.input.refs).map((field) => {
        this.refs.form.getComponent(field).validate();
      });
    }
  }

  onButtonPress(){
    const value = this.refs.form.getValue();
    const {userName, email, password} = this.props;
    Keyboard.dismiss();
    this.props.signupUser({userName, email, password}, value);
  }

  onUserNameChange(text){
    this.props.userNameChanged(text);
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onSceneChange(key){
    this.props.push(key);
  }

  componentWillMount() {
    this.Form = t.form.Form;
    this.options = addFormFieldsActionCreators(UserSignupOptions,
      {
        user_name: this.onUserNameChange.bind(this),
        email: this.onEmailChange.bind(this),
        password: this.onPasswordChange.bind(this)
      });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return(
      <Button raised primary text="Sign Up" onPress={this.onButtonPress.bind(this)}/>
    );
  };

  renderAuthFailureDialog() {
    if (!this.props.loading && this.props.auth_error){
      Alert.alert(
        'Error de Autentificación',
        this.props.auth_error_message,
      )}
  }


  render(){
    const Form = this.Form;
    const options = this.options;

    return(
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}/>
        <KeyboardAvoidingView behavior={'padding'} style={{flex: 6, justifyContent: 'center'}}>
          <Form
            ref="form"
            type={UserSignup}
            options={options}
            value={{email: this.props.email, password: this.props.password}}
            onChange={this.onChange.bind(this)}
          />
          {this.renderButton()}
          {this.renderAuthFailureDialog()}
        </KeyboardAvoidingView>

        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0)'}}>
          <Text>
            Ya tienes una cuenta?
          </Text>
          <Text onPress={() => this.onSceneChange({key: 'log_in'})}>
            Accede!
          </Text>
        </View>
      </View>


    );
  }
}

const mapsStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    auth_error_message: state.login.auth_error_message,
    auth_error: state.login.auth_error,
    loading: state.login.loading,
    tried: state.login.tried,

    push: state.nav.push,
  };
};


export default connect(
  mapsStateToProps,
  {userNameChanged, emailChanged, passwordChanged, signupUser, push})
  (SignUpScene);