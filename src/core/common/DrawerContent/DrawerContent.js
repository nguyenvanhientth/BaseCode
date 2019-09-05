import React, { PureComponent } from 'react';
import { View, Text, ScrollView,TouchableOpacity , AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './DrawerContent.styles';
//import { DrawerWrapper } from './Drawer.styles';

class DrawerContent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  _signOutAsync =  async(navigator) => {
    // await AsyncStorage.clear();
     navigator.navigation.navigate('LoginStack');
};
_onClickApp = (navigator) => {
  // this.setState({ activeMenu: 'send-feedback' });
  console.warn('click')
//   navigator.navigation.navigate('App');
}
  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.DrawerWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    var { navigator } = this.props;
        return (
          <View style={styles.container}>
              <View style={styles.userInfo}>
                  <View style={styles.avatar}>
                      <Icon name = "user" ></Icon>
                  </View>
                  <Text style={styles.welcomeText}>Xin chào, <Text style={{ fontWeight: 'bold' }}>HIEN</Text></Text>
                  <View style={styles.userSubInfo}>
                      <View style={styles.subInfoItem}>
                          <Icon name="mail" color="#fff" size={16}></Icon>
                          <Text style={styles.subInfoText}>0 góp ý</Text>
                      </View>
                      <View style={styles.subInfoItem}>
                          <Icon name="message1" color="#fff" size={16}></Icon> 
                          <Text style={styles.subInfoText}>0 bình luận</Text>
                      </View>
                  </View>
              </View>
              <ScrollView>
                  <View style={styles.sideMenu}>
                          <TouchableOpacity onPress={() => this._onClickApp(navigator) }>
                          <View style={[styles.menuItemApp, { backgroundColor: this.state.activeMenu === 'send-feedback' ? '#eee' : '#fff' }]}>
                              <Text style={styles.menuItemCaption}>
                                  Home
                              </Text>
                              <View style={styles.menuIcon}>
                                  <Icon name="home" style={styles.icon} size={22} color={"#fff"}></Icon>
                              </View>
                          </View>
                          </TouchableOpacity> 
                          <TouchableOpacity onPress={() => this._onClickApp(navigator) }>
                          <View style={[styles.menuItemApp, { backgroundColor: this.state.activeMenu === 'send-feedback' ? '#eee' : '#fff' }]}>
                              <Text style={styles.menuItemCaption}>
                                  Option 2
                              </Text>
                              <View style={styles.menuIcon}>
                                  <Icon name="home" style={styles.icon} size={22} color={"#fff"}></Icon>
                              </View>
                          </View>
                          </TouchableOpacity> 
                          <TouchableOpacity onPress={() => this._onClickApp(navigator) }>
                          <View style={[styles.menuItemApp, { backgroundColor: this.state.activeMenu === 'send-feedback' ? '#eee' : '#fff' }]}>
                              <Text style={styles.menuItemCaption}>
                                  Option 3
                              </Text>
                              <View style={styles.menuIcon}>
                                  <Icon name="home" style={styles.icon} size={22} color={"#fff"}></Icon>
                              </View>
                          </View>
                          </TouchableOpacity> 
                      <TouchableOpacity onPress = {() => this._signOutAsync(navigator)}>
                          <View style={[styles.menuItemApp, { backgroundColor: this.state.activeMenu === 'logout' ? '#eee' : '#fff' }]}>
                              <Text style={styles.menuItemCaption}>
                                  Đăng xuất
                              </Text>
                              <View style={styles.menuIcon}>
                                  <Icon name="logout" style={styles.icon} size={22} color={"#fff"}></Icon> 
                              </View>
                          </View>
                      </TouchableOpacity>
                  </View>
                </ScrollView>
            </View>
        );
    }
}

DrawerContent.propTypes = {
  // bla: PropTypes.string,
};

DrawerContent.defaultProps = {
  // bla: 'test',
};

export default DrawerContent;
