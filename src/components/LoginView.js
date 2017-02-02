import React, { Component } from 'react';
import { Text, View, Modal, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Card, Divider, Button, Container } from 'react-native-material-ui';
import { Input, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import t from 'tcomb-form-native'
import { UserLogin, UserLoginOptions } from '../initializers/formModels'
import { addFormFieldsActionCreators } from '../helpers/methods'


class LoginView extends Component {

  onChange(){
    if (this.props.tried) {
      Object.keys(this.refs.form.refs.input.refs).map((field) => {
        this.refs.form.getComponent(field).validate();
      });
    }
  }

  onButtonPress(){
    const value = this.refs.form.getValue();
    const {email, password} = this.props;
    Keyboard.dismiss();
    this.props.loginUser({email, password}, value);
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  componentWillMount() {
    this.Form = t.form.Form;
    this.options = addFormFieldsActionCreators(UserLoginOptions,
                                          {email: this.onEmailChange.bind(this),
                                          password: this.onPasswordChange.bind(this)});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return(
      <Button raised primary text="Log in" onPress={this.onButtonPress.bind(this)}/>
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
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1, justifyContent: 'center'}}>
        <Form
          style={{flex:2}}
          ref="form"
          type={UserLogin}
          options={options}
          value={{email: this.props.email, password: this.props.password}}
          onChange={this.onChange.bind(this)}
        />
        {this.renderButton()}
        {this.renderAuthFailureDialog()}
      </KeyboardAvoidingView>
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
    tried: state.login.tried
  };
};

export default connect(
  mapsStateToProps,
  {emailChanged, passwordChanged, loginUser})
  (LoginView);