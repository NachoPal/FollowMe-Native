// import React, { Component } from 'react';
// import { Text, View, Modal, KeyboardAvoidingView, Keyboard, ListView } from 'react-native';
// import { connect } from 'react-redux'
// import DayRow  from '../components/common/DayRow'
// import { Spinner } from './common';
// import {
//   push
// } from '../actions'
//
// class DayListScene extends Component {
//   //
//   // componentWillReceiveProps(nextProps) {
//   //   // nextProps are the next set of props that this component
//   //   // will be rendered with
//   //   // this.props is still the old set of props
//   //   //this.props.employeesFetch();
//   //   this.createDataSource(nextProps);
//   // }
//
//   componentWillMount() {
//     const { days } = this.props.trip.associated;
//     this.createDataSource(this.props);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.createDataSource(nextProps);
//   }
//
//   createDataSource( { days } ) {
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     this.dataSource = ds.cloneWithRows(days);
//   }
//
//   renderRow(day) {
//     return <DayRow day={day} />;
//   }
//
//   renderDayList() {
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
//         {this.renderDayList()}
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
// export default connect(mapsStateToProps, {push})(DayListScene);