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
    headerRight: <HeaderButton iconName="plus" style={styles.mr15} navigation={navigation} onPress={() => console.warn('click')} />
})

  componentDidMount = () => {
    this.setState({
      data: [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        }]
    });
    // fetch('https://api.myjson.com/bins/dre27')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson)
    //       this.setState({data: responseJson});
    //   })
    //   .catch((error) => {
    //       console.error(error);
    //   });
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
        <Text>{this.state.data.length}</Text>
        <FlatList 
          data={this.state.data}
          // getItemLayout = { (item,index) => (
          //   {length: 800 , offset: 30 * index,index}
          // )}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor = {(item,index) => index.toString()}
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
