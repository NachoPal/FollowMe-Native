import React, { Component } from 'react';
import { Text, View, Modal, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux'
import {
  fetchTripIndex,
  push
} from '../actions'

class TripListScene extends Component {

  // componentWillReceiveProps(nextProps) {
  //   // nextProps are the next set of props that this component
  //   // will be rendered with
  //   // this.props is still the old set of props
  //   //this.props.employeesFetch();
  //   this.createDataSource(nextProps);
  // }

  componentWillMount() {
    this.props.fetchTripIndex()
  }

  //createDataSource({ employees }) {
    //const ds = new ListView.DataSource({
      //rowHasChanged: (r1, r2) => r1 !== r2
    //});

    //this.dataSource = ds.cloneWithRows(employees);
  //}

  render() {
    return(
      // <ListView
      //   dataSource={this.state.dataSource}
      //   renderRow={(rowData) => <Text>{rowData}</Text>}
      // />
      <View><Text>Hola</Text></View>
    );
  }
}

const mapsStateToProps = state => {
  return {
    email: state.trip.trips,

  };
};

export default connect(
  mapsStateToProps,
  {fetchTripIndex})
  (TripListScene);
