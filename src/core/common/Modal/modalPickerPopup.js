import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView,TextInput, Platform } from 'react-native';
import styles from './modalPicker.style';
import blueVersion from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ModalPickerPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: Object,
            searchVal:'',
        }
    }
    _onClose() {
        this.props._onClose();
    }
    _onSelect(item) {
        this.setState({ selectedValue: item });
        this.props._onSelect(item);
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
    render() {
        var {placeholder, style} = this.props;
        return (
            <Modal
                onRequestClose={() => {
                    this.props._onClose();;
                }}
                visible={this.props.modalVisible}
                transparent={true}
                animationType="fade">
                <View
                    style={styles.backdrop}>
                    <View
                        style={[styles.modalContainer,{width: '100%'}]}>
                        <View><Text style={styles.modalTitle}>{this.props.title}:</Text></View>
                        <ScrollView style={{ maxHeight: 400 }}>
                        <View style={styles.searchBox}>
                <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    style={[styles.inputSearch, style]}
                    value={this.state.searchVal}
                    onChangeText={(text) => this._handleChange(text)}
                    />
                    <Icon name = {Platform.OS === "ios" ? "ios-search" : "md-search"} style={styles.iconSearch}></Icon>
                    {this._renderClearButton()}
            </View>
                            {
                                this.props.data.map((item, index) => {
                                    return (
                                        <TouchableOpacity style={styles.selectItem} key={index.toString()} onPress={() => this._onSelect(item)}>
                                            <View>
                                                <Text style={[{ color: this.state.selectedValue === item ? blueVersion.mainColor : null }]}>
                                                    {item.Code} - {item.Name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                        <View style={styles.modalClose}>
                            <TouchableOpacity onPress={() => this._onClose()}>
                                <Text style={{ color: '#999' }}>
                                    Đóng
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}