import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import blueVersion from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Checkbox extends Component{
    render(){
        var {onSelect, value, selectedValue} = this.props;
        return(
            <TouchableOpacity onPress={()=> onSelect(value)}>
                                    <View style={[styles.checkbox, value === selectedValue ? styles.checkboxActive : '']}>
                                        <Icon name="check" size={18} color='#fff'/>
                                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    checkbox:{
        width:24,height:24,borderRadius:12,borderColor:'#ddd',borderWidth:1,alignItems:'center',justifyContent:'center'
      },
      checkboxActive:{
          backgroundColor:blueVersion.mainColor,
          borderColor:blueVersion.mainColor,
      }
})