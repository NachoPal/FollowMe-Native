import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import LogInScene from './LogInScene';
import SignUpScene from './SignUpScene';
import TripListScene from './TripListScene';
import { connect } from 'react-redux'

const { CardStack: NavigationCardStack } = NavigationExperimental;

export class NavigationRoot extends Component {

  renderScene(props) {
    switch (props.scene.route.key) {
      case 'log_in':
        return <LogInScene/>;
      case 'sign_up':
        return <SignUpScene/>;
      case 'trips':
        return <TripListScene/>;
      default:
        return <LogInScene/>;
    }
  };

  render() {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.nav}
        renderScene={this.renderScene}
      />
    );
  }
}

const mapsStateToProps = state => {
  return {
    nav: state.nav
  };
};

export default connect(mapsStateToProps)(NavigationRoot);