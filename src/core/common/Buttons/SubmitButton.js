import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class SubmitButton extends Component{
    render(){
        var {caption, onPress, style, textStyles, disabled, activeOpacity} = this.props;

        return(
            <View style={{ justifyContent:'flex-end', flexDirection:'row', alignItems:'flex-end' }}>
                <TouchableOpacity  
                    style={style} 
                    onPress={() => onPress()} 
                    disabled={disabled} 
                    activeOpacity={activeOpacity}>
                        <Text style={textStyles}>
                            {caption}
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}