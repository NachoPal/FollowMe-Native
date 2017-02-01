import React, { Component } from 'react';

export function toJson(object) {
  return JSON.stringify(object, undefined, 4)
}

export function addFormFieldsActionCreators (fieldsObject, actionCreators) {

  Object.keys(actionCreators).map((field) => {
    fieldsObject.fields[field].onChange = (event) => {
      actionCreators[field](event.nativeEvent.text);
    };
  });

  return fieldsObject;
}
