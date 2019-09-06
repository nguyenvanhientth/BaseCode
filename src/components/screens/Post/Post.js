//
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity,Dimensions, PermissionsAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome' ;
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated'
//import { PostWrapper } from './Post.styles';

import DrawerButton from '../../../core/common/Buttons/DrawerButton';
import styles from './Post.styles'

class Post extends PureComponent { 
  constructor(props) {
    super(props);
  }
  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Gallery' },
      { key: 'second', title: 'Photo' },
    ],
    hasError: false,
    focusedScreen : true,
};

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#fff'
    },
    headerTitleStyle: { color: '#000', fontWeight: 'bold', fontSize: 18 },
    title: 'Camera',
    headerLeft: <DrawerButton navigation={navigation} />,
    // headerRight: <HeaderButton iconName="bell" style={styles.mr15} navigation={navigation} onPress={() => console.warn('click')} />
});

async componentDidMount(){
  await this.requestCameraPermission();
  const { navigation } = this.props;
   navigation.addListener('willFocus', () =>
     this.setState({ focusedScreen: true })
   );
   navigation.addListener('willBlur', () =>
     this.setState({ focusedScreen: false })
   );
}

requestCameraPermission = async() => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // console.log('You can use the camera');
    } else {
      return <Text>No access to camera</Text>;
    }
  } catch (err) {
    console.warn(err);
  }
}

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.warn('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  photoScreen = () => 
  <View style={styles.container}>
    <RNCamera
      ref={cam => {
        this.camera = cam;
      }}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      // androidCameraPermissionOptions = {{
      //   title: 'Permission to you camera !',
      //   message: 'We need your permission to use your camera',
      //   buttonPositive: 'Ok',
      //   buttonNegative: 'Cancel',
      // }}
    >
    </RNCamera>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
        <Icon name = 'circle' size = {50} color = "gray"/>
        {/* <Text>Take Photo</Text> */}
      </TouchableOpacity>
    </View>
  </View>

  galleryScreen = () => 
  <View style = {styles.container} >
    <Text>test</Text>
  </View>

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity key = {i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong.</Text>
        </View>
      );
    } else if(this.state.focusedScreen){
      return (
        <TabView
          navigationState={this.state}
          tabBarPosition = "bottom"
          renderTabBar = {this._renderTabBar}
          renderScene={SceneMap({
            first: this.galleryScreen,
            second: this.photoScreen,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      );
    } else {
      return <View />
    }
  }
}

Post.propTypes = {
  // bla: PropTypes.string,
};

Post.defaultProps = {
  // bla: 'test',
};

export default Post;
