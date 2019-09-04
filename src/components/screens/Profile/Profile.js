import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import  styles from './Profile.styles';
//import { ProfileWrapper } from './Profile.styles';
import  DrawerButton  from '../../../core/common/Buttons/DrawerButton';
import HeaderButton  from '../../../core/common/Buttons/HeaderButton';

class Profile extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#fff'
    },
    headerTitleStyle: { color: '#000', fontWeight: 'bold', fontSize: 18 },
    title: 'Profile',
    headerLeft: <DrawerButton navigation={navigation} />,
    headerRight: <HeaderButton iconName="ellipsis-v" style={styles.mr15} navigation={navigation} onPress={() => console.warn('click')} />
})
  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.ProfileWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.ProfileWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
