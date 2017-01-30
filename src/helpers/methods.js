import React, { Component } from 'react';

export function toJson(object) {
  return JSON.stringify(object, undefined, 4)
}

export function createFormFieldsActions (fieldsObject, actionCreators, component) {

  Object.keys(actionCreators).map((field) => {
    fieldsObject.fields[field].onChange = (event) => {
      if (component.props.error){
        //component.refs.form.getComponent(field).setState({email: event.nativeEvent.text});
        //console.log(event.nativeEvent.text);
        //console.log(this.state.value);
        component.refs.form.getComponent(field).validate();
      }
      actionCreators[field](event.nativeEvent.text);
      //const a = component.refs.form;
      //console.log(component.refs.form.getComponent(field));
    };
  });

  return fieldsObject;
}
