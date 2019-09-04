import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './FastImage.styles';
//import { FastImageWrapper } from './FastImage.styles';
  

class FastImage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.FastImageWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.FastImageWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

FastImage.propTypes = {
  // bla: PropTypes.string,
};

FastImage.defaultProps = {
  // bla: 'test',
};

export default FastImage;
