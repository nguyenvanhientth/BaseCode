import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from "react-native";
import PropTypes from "prop-types";

const log = () => {
    console.log("Please attach a method to this component");
};
class ButtonBack extends Component {
    render() {
        const { title, onPress } = this.props;
        return (
            <View>
                <TouchableOpacity style={styles.container} onPress={onPress}>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

ButtonBack.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.any,
    TouchableComponent: PropTypes.any,
    ViewComponent: PropTypes.any
};
ButtonBack.defaultProps = {
    title: "Button Back",
    TouchableComponent:
        Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback,
    onPress: log
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "transparent",
        borderRadius: 50
    },
    title: {
        marginTop: 5,
        
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#145367",
        ...Platform.select({
            ios: {
                fontSize: 18
            },
            android: {
                fontSize: 12
            }
        })
    }
});

export default ButtonBack;