import React from 'react';
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
  return(
      <ActivityIndicator size={size || 'large'} />
  );
};

export { Spinner }