export function toJson(object) {
  return JSON.stringify(object, undefined, 4)
}

export function checkFormFields (fieldsObject, component) {
  console.log(component.props);

  const fields = Object.keys(fieldsObject.fields);

  fields.map((field) => {
    console.log(component.refs.form.getComponent(field).refs.input);
    if (component.refs.form.getComponent(field).refs.input.isFocused()) {
      component.refs.form.getComponent(field).validate();
    }
  });
}

export function createFormFieldsActions (fieldsObject, actionCreators, component) {

  Object.keys(actionCreators).map((field) => {
    fieldsObject.fields[field].onChange = () => {
      if (component.props.error){
        component.refs.form.getComponent(field).validate();
      }
      actionCreators[field](component.refs.form.getComponent(field).props.value)
    };
  });

  return fieldsObject;
}
