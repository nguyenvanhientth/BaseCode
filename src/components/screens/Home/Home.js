import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.styles';
import  DrawerButton  from '../../../core/common/Buttons/DrawerButton';
import HeaderButton  from '../../../core/common/Buttons/HeaderButton';
import {ImageElement} from './ImageElement'
//import { HomeWrapper } from './Home.styles';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      data: [],
    };
  }
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#fff'
    },
    headerTitleStyle: { color: '#000', fontWeight: 'bold', fontSize: 18 },
    title: 'Intagaram',
    headerLeft: <DrawerButton navigation={navigation} />,
    headerRight: <HeaderButton iconName="bell" style={styles.mr15} navigation={navigation} onPress={() => console.warn('click')} />
})

  componentDidMount = () => {
    fetch('https://api.myjson.com/bins/dre27')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({data: responseJson});
      })
      .catch((error) => {
          console.error(error);
      });
  }

  renderItem = ({item}) => <ImageElement data = {item} />

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View>
        <FlatList 
          data={this.state.data}
          // getItemLayout = { (item,index) => (
          //   {length: 800 , offset: 30 * index,index}
          // )}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor = {(item,index) => index.toString()}
          contentContainerStyle={styles.container}
          style={{ backgroundColor: '#FFF' }}
        />
      </View>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
