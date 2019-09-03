import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Platform, TouchableOpacity, TouchableNativeFeedback, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
const log = () => {    
    console.log('Please attach a method to this component');
  };
class Button extends Component {
    state = {  }
    render() {
        const {
            title,
            image,
            onPress,
            width,
        }  = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity  onPress={onPress} >
                    <View width={width} style={styles.touchable}>
                        <Image source={image} style={{width: 12, height: 12}} />
                        <Text style={styles.title}>{title}</Text>
                    </View> 
                </TouchableOpacity >
           </View> 
        );
    }
};

Button.propTypes = {
    title: PropTypes.string, 
    image: PropTypes.string,
    onPress: PropTypes.any,
    TouchableComponent: PropTypes.any,
    ViewComponent: PropTypes.any,   
    width: PropTypes.number, 
};

Button.defaultProps = {
    title: 'Button Home',
    TouchableComponent: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
    onPress: log,
};

const styles = StyleSheet.create({
    container: {           
        justifyContent: 'center',
        alignItems: 'center',                               
    },
    touchable:
    {
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor: 'transparent',  
        height: 40,
    },
    title:
    {
        marginTop: 5,
        
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'white',
        ...Platform.select({
            ios: {
              fontSize: 14,
            },
            android: {
              fontSize: 10,
              fontWeight: '100',
            },
          }),
    },
    image:
    {

    }

});

export default Button;