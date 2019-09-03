import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import styles from './modalPicker.style'
import blueVersion from '../styles/colors';
export default class ModalPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
        }
    }
    _onClose() {
        this.props._onClose();
    }
    _onSelect(item) {
        this.setState({ selectedValue: item });
        this.props._onSelect(item);
    }
    render() {
        return (
            <Modal
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}
                visible={this.props.modalVisible}
                transparent={true}
                animationType="fade">
                <View
                    style={styles.backdrop}>
                    <View
                        style={styles.modalContainer}>
                        <View><Text style={styles.modalTitle}>{this.props.title}:</Text></View>
                        <ScrollView style={{ maxHeight: 400 }}>
                            {
                                this.props.data.map((item, index) => {
                                    return (
                                        <TouchableOpacity style={styles.selectItem} key={index.toString()} onPress={() => this._onSelect(item)}>
                                            <View>
                                                <Text style={[{ color: this.state.selectedValue === item ? blueVersion.mainColor : null }]}>
                                                    {item}
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