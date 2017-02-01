import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Divider, Button, Container } from 'react-native-material-ui';
import { Input, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import t from 'tcomb-form-native'
import { UserLogin, UserLoginOptions } from '../initializers/formModels'
import { addFormFieldsActionCreators } from '../helpers/methods'


class AuthView extends Component {

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

  render(){
    const Form = this.Form;
    const options = this.options;

    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Form
          ref="form"
          type={UserLogin}
          options={options}
          value={{email: this.props.email, password: this.props.password}}
          onChange={this.onChange.bind(this)}
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
    email_error_message: state.auth.email_error_message,
    password_error_message: state.auth.password_error_message,
    auth_error: state.auth.auth_error,
    loading: state.auth.loading,
    tried: state.auth.tried
  };
};

export default connect(
  mapsStateToProps,
  {emailChanged, passwordChanged, loginUser})
  (AuthView);