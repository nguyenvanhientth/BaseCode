//@ts-check
import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableHighlight, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.styles';
import  DrawerButton  from '../../../core/common/Buttons/DrawerButton';
import HeaderButton  from '../../../core/common/Buttons/HeaderButton';
import {ImageElement} from './ImageElement'
import {colors} from '../../../core/common/styles';
import SearchBox from "../../../core/common/SearchBox"
import LoadingIndicator from '../../../core/common/Loading';
//import { HomeWrapper } from './Home.styles';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isRefreshing: false,
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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
            data: responseJson
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  fetchData = () => {
      alert("No load more!")
  }
  renderItem = ({item}) => <ImageElement data = {item} />
  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };
  ListEmptyView = () => {
    return (
      <View style = {styles.container}>
        <Text style = {styles.textCenter} >No Data Present In FlatList ... </Text>
        <TouchableHighlight onPress = {() => console.warn("load data again")} >
          <Text style = {[styles.textCenter, { color: colors.green } ]}>Try Again!</Text>
        </TouchableHighlight>
      </View>
    )
  }
  renderHeader = () => {
    return (
    <SearchBox placeholder="Nhập thông tin cần tìm" onSearch={this._onSearch}/>
    )
  };

  _onSearch =(searchVal) => {
    // console.warn("search",searchVal)
  }

  renderFooter = () => {
    return (
    <LoadingIndicator color = {colors.green} />
    )
  }

  _onRefresh = async() => {
    await this.setState({isRefreshing: true});
    await this.componentDidMount();
    this.setState({isRefreshing: false});
  }
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
          ItemSeparatorComponent = {this.renderSeparator} // hiển thị footer item
          data={this.state.data}
          // getItemLayout = { (item,index) => (          // clear do luong noi dung dong
          //   {length: 800 , offset: 30 * index,index}
          // )}
          refreshing = {this.state.isRefreshing}
          onRefresh = {()=>this._onRefresh()} // reset data..
          renderItem={(item) => this.renderItem(item)}
          keyExtractor = {(item,index) => index.toString()}
          contentContainerStyle={styles.container}
          style={{ backgroundColor: '#FFF' }}
          ListEmptyComponent = {this.ListEmptyView} // hiene rthij thoong baos khi load data false
          ListHeaderComponent = {this.renderHeader}
          ListFooterComponent = {this.renderFooter}
          extraData = {this.state }  // render khi change
          horizontal = {false} // keo ngang if true
          // inverted = {0} // dao nguoc huong scroll
          onEndReachedThreshold = {0.5} // call onEndReached khi location owr 50% list
          onEndReached = { () => this.fetchData() } // gọi lại khi location threshold
          removeClippedSubviews = {true} // co the cai thien hieu xuat cuon cho ds lon
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
