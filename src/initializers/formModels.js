import t from 'tcomb-form-native';

const UserName = t.refinement(t.String, (password) => {
  return (password.length <= 20)
});

const Email = t.refinement(t.String, (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
});

const Password = t.refinement(t.String, (password) => {
  return (password.length >= 6 && password.length <= 20)
});

export const UserLogin = t.struct({
  email: Email,
  password: Password
});

export const UserSignup = t.struct({
  name: UserName,
  email: Email,
  password: Password
});

export const UserLoginOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      error: 'Email no valido'
    },
    password: {
      error: 'Password de 6 a 20 caracteres de longitud',
      secureTextEntry: true
    }
  }
};

export const UserSignupOptions = {
  auto: 'placeholders',
  fields: {
    name: {
      error: 'Nombre de usuario menor de 20 caracteres',
    },
    email: {
      error: 'Email no invalido',
    },
    password: {
      error: 'Password de 6 a 20 caracteres de longitud',
      secureTextEntry: true
    }
  }
};
