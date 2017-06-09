// import React, { Component } from 'react';
// import { Text, View, Modal, KeyboardAvoidingView, Keyboard, ListView } from 'react-native';
// import { connect } from 'react-redux'
// import TripRow  from './TripRow'
// import { Spinner } from './common';
// import {
//   fetchTripIndex,
//   push
// } from '../actions'
//
// class TripListScene extends Component {
//
//   // componentWillReceiveProps(nextProps) {
//   //   // nextProps are the next set of props that this component
//   //   // will be rendered with
//   //   // this.props is still the old set of props
//   //   //this.props.employeesFetch();
//   //   this.createDataSource(nextProps);
//   // }
//
//   componentWillMount() {
//     this.props.fetchTripIndex(this.props.user);
//     this.createDataSource(this.props);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.createDataSource(nextProps);
//   }
//
//   createDataSource( { trips } ) {
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     this.dataSource = ds.cloneWithRows(trips);
//   }
//
//   renderRow(trip) {
//     return <TripRow trip={trip} />;
//   }
//
//   renderTripList() {
//     if (this.props.loading) {
//       return <Spinner size="large"/>;
//     }
//     return(
//       <ListView
//         enableEmptySections
//         dataSource={this.dataSource}
//         renderRow={this.renderRow}
//       />
//     );
//   }
//
//
//
//   render() {
//     return(
//       <View>
//         {this.renderTripList()}
//       </View>
//     );
//   }
// }
//
// const mapsStateToProps = state => {
//   return {
//     trips: state.trip.trips,
//     loading: state.trip.loading,
//     user: state.login.user
//   };
// };
//
// export default connect(mapsStateToProps, {fetchTripIndex})(TripListScene);
