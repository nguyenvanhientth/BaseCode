import React from "react";
import { createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../core/common/styles'
import DrawerContent from "../../core/common/DrawerContent";
import Home from "../screens/Home";
import Search from "../screens/Search/Search";
import Like from "../screens/Like/Like";
import Profile from "../screens/Profile/Profile";
import Login from "../screens/Login/Login";

// Login
const LoginStack = createStackNavigator({
    screen: Login
});
// Home stack
const HomeStack = createStackNavigator({
    screen: Home
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
        return (
           <Icon name="home" size={18} color={focused? colors.mainColor:'#333'}/>
    )}
} 
// search stack
const SearchStack = createStackNavigator({
    Search
});
SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => {
        return (
           <Icon name="search" size={18} color={focused? colors.mainColor:'#333'}/>
    )}
} 
//like stack
const LikeStack = createStackNavigator({
    Like
});
LikeStack.navigationOptions = {
    tabBarLabel: 'Like',
    tabBarIcon: ({ focused }) => {
        return (
           <Icon name="heart-o" size={18} color={focused? colors.mainColor:'#333'}/>
    )}
} 
// profile stack
const ProfileStack = createStackNavigator({
    Profile
});
ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => {
        return (
           <Icon name="info" size={18} color={focused? colors.mainColor:'#333'}/>
    )}
} 

const HomeTab = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Like: LikeStack,
    Profile: ProfileStack
},
{
    initialRouteName: "Home",
    
    tabBarOptions:{
        style:{
            backgroundColor:'#fff'
        },
        activeTintColor: colors.mainColor,
        inactiveTintColor: '#333',
    }
},);

const SearchTab = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Like: LikeStack,
    Profile: ProfileStack
},
{
    initialRouteName: "Search",
    
    tabBarOptions:{
        style:{
            backgroundColor:'#fff'
        },
        activeTintColor: colors.mainColor,
        inactiveTintColor: '#333',
    }},
);
const LikeTab= createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Like: LikeStack,
    Profile: ProfileStack
},
{
    initialRouteName: "Like",
    tabBarOptions:{
        style:{
            backgroundColor:'#fff'
        },
        activeTintColor: colors.mainColor,
        inactiveTintColor: '#333',
    }},
);
const ProfileTab= createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Like: LikeStack,
    Profile: ProfileStack
},
{
    initialRouteName: "Profile",
    tabBarOptions:{
        style:{
            backgroundColor:'#fff'
        },
        activeTintColor: colors.mainColor,
        inactiveTintColor: '#333',
    }},
);

const drawerOptions = {
    drawerPosition: 'left',
    contentComponent: (props) => <DrawerContent navigator={props} />
  }
//Main 
const App = createDrawerNavigator({
    MainTab: {
      screen: HomeTab,
    },
    SearchTab: {
        screen: SearchTab,
    },
    LikeTab: {
        screen: LikeTab,
    },
    ProfileTab: {
        screen: ProfileTab
    }
  },
  drawerOptions);

export default Navigator = createSwitchNavigator({
    LoginStack,
    App,
    // HomeStack
},
{
    
}
);
