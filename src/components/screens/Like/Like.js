import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Like.styles';
//import { LikeWrapper } from './Like.styles';

class Like extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


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
