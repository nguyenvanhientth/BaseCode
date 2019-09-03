import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerButton extends Component{
    render(){
        var {caption, onPress, style, textStyles, disabled, activeOpacity, navigation} = this.props;

        return(
            <View style={{marginLeft:15}}>
                <TouchableOpacity 
                 onPress={() => navigation.openDrawer()} 
                 >
                      <Icon name="bars" size={30} color={colors.mainColor}/>
                </TouchableOpacity>
            </View>
        )
    }
}