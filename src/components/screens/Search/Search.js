import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import  styles from './Search.styles';
//import { SearchWrapper } from './Search.styles';

class Search extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillUnmount = () => {
    console.log('Search will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.SearchWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.SearchWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Search.propTypes = {
  // bla: PropTypes.string,
};

Search.defaultProps = {
  // bla: 'test',
};

export default Search;
