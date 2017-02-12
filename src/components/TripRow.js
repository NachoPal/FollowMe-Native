import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class TripRow extends Component {

  render() {
    const { name } = this.props.trip;
    return(
      <View>
        <Text>{name}</Text>
      </View>
    );
  }
  // onRowPress() {
  //   Actions.employeeCreate();
  // };
  //
  // render() {
  //   const { name } = this.props.employee;
  //
  //   return(
  //     <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
  //       <View>
  //         <CardSection>
  //           <Text style={styles.titleStyle}>
  //             {name}
  //           </Text>
  //         </CardSection>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default TripRow;