import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Divider, Button, Container } from 'react-native-material-ui';
import { Input, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import t from 'tcomb-form-native'
import { UserLogin, UserLoginOptions } from '../initializers/formModels'
import { checkFormFields, createFormFieldsActions } from '../helpers/methods'


class AuthView extends Component {

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

    this.options = createFormFieldsActions(UserLoginOptions,
                                          {email: this.onEmailChange.bind(this),
                                          password: this.onPasswordChange.bind(this)},
                                          this);
  }


  render(){
    const Form = this.Form;
    const options = this.options;

    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        {/*<Input
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
        />*/}
        <Form
          ref="form"
          type={UserLogin}
          options={options}
          value={{email: this.props.email, password: this.props.password}}
          //onChange={this.onChange.bind(this)}
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