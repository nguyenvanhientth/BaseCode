import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './Splash.styles'

class Splash extends PureComponent {
  static navigationOptions = {
    header: null
  }

    componentDidMount() {
        setTimeout(() => {
            this.checkSignInStatus();
        }, 1000);
    }

    onSuccess = (data) => {
    }

    onError = (error) => {
    }

    checkSignInStatus() {
      this.props.navigation.navigate('LoginStack');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>SPLASH SCREEN</Text>
            </View>
        );
    }
}

export default Splash


