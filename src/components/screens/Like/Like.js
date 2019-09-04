import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Like.styles';
//import { LikeWrapper } from './Like.styles';
import  DrawerButton  from '../../../core/common/Buttons/DrawerButton';
import HeaderButton  from '../../../core/common/Buttons/HeaderButton';

class Like extends PureComponent { 
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
    title: 'Like',
    headerLeft: <DrawerButton navigation={navigation} />,
    headerRight: <HeaderButton iconName="ellipsis-v" style={styles.mr15} navigation={navigation} onPress={() => console.warn('click')} />
})

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.LikeWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.LikeWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Like.propTypes = {
  // bla: PropTypes.string,
};

Like.defaultProps = {
  // bla: 'test',
};

export default Like;
