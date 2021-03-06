import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class TripRow extends Component {

  onSceneChange(key) {
    this.props.push(key)
  }

  onRowPress() {
    this.onSceneChange({key: 'days'})
  };

  render() {
    const { name } = this.props.trip;
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

export default TripRow;