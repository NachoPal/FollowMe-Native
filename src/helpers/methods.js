import React, { Component } from 'react';

export function toJson(object) {
  return JSON.stringify(object, undefined, 4)
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function addFormFieldsActionCreators (fieldsObject, actionCreators) {

  Object.keys(actionCreators).map((field) => {
    fieldsObject.fields[field].onChange = (event) => {
      actionCreators[field](event.nativeEvent.text);
    };
  });
  return fieldsObject;
}

export function updateFormErrorMessages(nextState, modelOptions, form, component) {
  if (nextState.auth_error) {
    var field = {};

    Object.keys(nextState.auth_error_message).map(key => {
      field[key] = {
        hasError: { $set: true},
        error: { $set: capitalize(key) + ' ' + nextState.auth_error_message[key] }
      };
    });

    component.options = form.update(component.options,{
      fields: field
    });

  }else{
    Object.keys(component.options.fields).map(key => {
      component.options.fields[key].error = modelOptions.fields[key].error;
      component.options.fields[key].hasError = false;
    });
  }
}

