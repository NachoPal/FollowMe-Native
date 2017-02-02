import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import LogInScene from './LogInScene';
import SignUpScene from './SignUpScene';
import { connect } from 'react-redux'

const { CardStack: NavigationCardStack } = NavigationExperimental;

export class NavigationRoot extends Component {

  renderScene(props) {
    console.log(props.scene.route.key);
    switch (props.scene.route.key) {
      case 'log_in':
        return <LogInScene/>;
      case 'sign_up':
        return <SignUpScene/>;
      default:
        return <LogInScene/>;
    }
  };

  render() {
    console.log (this.props);
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
//export default NavigationRoot;