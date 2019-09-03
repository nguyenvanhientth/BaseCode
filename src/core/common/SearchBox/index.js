import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class SeachBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchVal:'',
        }
    }

    _handleChange = (searchVal) =>{
       this.setState({
           searchVal:searchVal
       });
       this.props.onSearch(searchVal);
    }

    _renderClearButton = ()=>{
        if(this.state.searchVal!==''){  
            return (<TouchableOpacity onPress={()=> {this.setState({searchVal:''}); this.props.onSearch('')}}  style={styles.iconClose}><Icon.Feather name="x" size={22}></Icon.Feather></TouchableOpacity>)
        }
        return null;
    }
   
    render(){
        var {placeholder, style} = this.props;
        return(
            <View style={styles.searchBox}>
                <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    style={[styles.inputSearch, style]}
                    value={this.state.searchVal}
                    autoFocus = {true}
                    onChangeText={(text) => this._handleChange(text)}
                    />
                    <Icon name = {Platform.OS === "ios" ? "ios-search" : "md-search"} style={styles.iconSearch}></Icon>
                    {this._renderClearButton()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchBox:{
        backgroundColor:'#f1f1f1',
        padding:10,
        position:'relative'
    },
    inputSearch:{
        backgroundColor:'#fff',
        borderRadius:4,
        paddingVertical:5,
        paddingHorizontal:30
    },
    iconSearch:{
        position:'absolute',
        left:17,
        top:17
    },
    iconClose:{
        position:'absolute',
        right:17,
        top:12,
    }
});