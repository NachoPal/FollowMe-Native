import React, { Component } from 'react';
import { Text, View, Modal, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Input, Spinner } from '../components/common';
import { connect } from 'react-redux'
import {
  signupUserNameChanged,
  signupEmailChanged,
  signupPasswordChanged,
  signupUser,
  push,
} from '../actions'
import t from 'tcomb-form-native'
import { UserSignup, UserSignupOptions } from '../initializers/formModels'
import { addFormFieldsActionCreators, updateFormErrorMessages } from '../helpers/methods'


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
    const {name, email, password} = this.props;
    Keyboard.dismiss();
    this.props.signupUser({name, email, password}, value);
  }

  onUserNameChange(text){
    this.props.signupUserNameChanged(text);
  }

  onEmailChange(text){
    this.props.signupEmailChanged(text);
  }

  onPasswordChange(text){
    this.props.signupPasswordChanged(text);
  }

  onSceneChange(key){
    this.props.push(key);
  }

  componentWillMount() {
    this.Form = t.form.Form;
    this.options = addFormFieldsActionCreators(UserSignupOptions,
      {
        name: this.onUserNameChange.bind(this),
        email: this.onEmailChange.bind(this),
        password: this.onPasswordChange.bind(this)
      });
  }

  componentWillUpdate(nextState) {
    updateFormErrorMessages(nextState, UserSignupOptions, t, this)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return(
      <Button raised primary text="Sign Up" onPress={this.onButtonPress.bind(this)}/>
    );
  };

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
            value={{name: this.props.name, email: this.props.email, password: this.props.password}}
            onChange={this.onChange.bind(this)}
          />
          {this.renderButton()}
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
    name: state.signup.name,
    email: state.signup.email,
    password: state.signup.password,
    auth_error_message: state.signup.auth_error_message,
    auth_error: state.signup.auth_error,
    loading: state.signup.loading,
    tried: state.signup.tried,

    push: state.nav.push,
  };
};


export default connect(
  mapsStateToProps,
  {signupUserNameChanged, signupEmailChanged, signupPasswordChanged, signupUser, push})
  (SignUpScene);