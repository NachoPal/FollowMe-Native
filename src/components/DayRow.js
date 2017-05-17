import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class DayRow extends Component {

  onRowPress() {
    console.log("Funciona")
  };

  render() {
    //const { name } = this.props.trip;
    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Text>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
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

export default DayRow;