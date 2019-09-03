import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles';

export default class HeaderButton extends Component{
    render(){
        var {iconName, onPress, style, textStyles, disabled, activeOpacity, navigation} = this.props;

        return(
            <View style={style}>
                <TouchableOpacity 
                 onPress={() => onPress()} 
                 >
                      <Icon name={iconName} size={22} color={'blue'}/>
                </TouchableOpacity>
            </View>
        )
    }
}