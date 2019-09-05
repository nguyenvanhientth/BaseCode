import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Login.styles'
//import { LoginWrapper } from './Login.styles';
const logo = require("../../../assets/images/title.png")

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      userName: '',
      password: '',
    };
  }
  static navigationOptions = {
    header: null
  }
  _evenLogin = () => {
    this.props.navigation.navigate('App')
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.LoginWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
        <View style={styles.container}>
        <ScrollView style={styles.outer} contentContainerStyle={styles.inner}>
          <Image source={logo} style = {styles.logo} />
            <Text style={styles.title}>Đăng Nhập</Text>
            <View style={styles.formGroup}>
                <TextInput style={[ styles.textInput]}
                    underlineColorAndroid="transparent"
                    placeholder="Tên đăng nhập"
                    placeholderTextColor="#555"
                    onChangeText={(userName) => this.setState({ userName })}
                />
                <Icon name="user" style={styles.icon} size={18} />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={[styles.textInput, styles.textInput]}
                    underlineColorAndroid="transparent"
                    placeholder="Mật khẩu"
                    placeholderTextColor="#555"
                    onChangeText={(password) => this.setState({ password })}
                    //value={this.state.password}
                    secureTextEntry={true} />
                <Icon name="lock" style={styles.icon} size={18} />
            </View>
            <TouchableOpacity onPress={() =>this._evenLogin()}>
                <View style={[styles.primaryButton, styles.mt15, styles.mb15, { width: 280 }]}>
                    <Text style={styles.primaryButtonText}>
                        Đăng nhập
                    </Text>
                </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
