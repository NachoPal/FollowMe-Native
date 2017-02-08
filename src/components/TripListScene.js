import React, { Component } from 'react';
import { Text, View, Modal, KeyboardAvoidingView, Keyboard, ListView } from 'react-native';
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
    this.props.fetchTripIndex();

    this.createDataSource(this.props);

  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    //this.props.employeesFetch();
    this.createDataSource(nextProps);
  }

  createDataSource({ trips }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(trips);
  }

  renderRow(employee) {
    return <TripRow trip={employee} />;
  }



  render() {
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapsStateToProps = state => {
  return {
    email: state.trip.trips,

  };
};

export default connect(mapsStateToProps, {fetchTripIndex})(TripListScene);
