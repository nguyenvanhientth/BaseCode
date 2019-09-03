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

class ButtonHome extends Component {
    render() {
        const { title, image, onPress, width } = this.props;
        return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.container}>
            <View width={width - 20} style={styles.touchable}>
                <Image
                    source={image}
                    style={{ width: width * 0.3, height: width * 0.3 }}
                />
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
            </TouchableOpacity>
        </View>
        );
    }
}

ButtonHome.propTypes = {
    title: PropTypes.string,
    image: PropTypes.any,
    onPress: PropTypes.any,
    TouchableComponent: PropTypes.any,
    ViewComponent: PropTypes.any,
    width: PropTypes.number
};

ButtonHome.defaultProps = {
    title: "Button Home",
    TouchableComponent: Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback,
    onPress: log
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,    
    },
    touchable: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 2,
    },
    title: {
        marginTop: 5,
        
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#165468",
        ...Platform.select({
            ios: {
                fontSize: 18
            },
            android: {
                fontSize: 12,
                fontWeight: "500"
            }
        })
    },
    image: {}
});

export default ButtonHome;