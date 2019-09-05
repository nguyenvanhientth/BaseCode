import React, { PureComponent } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export default class LoadingIndicator extends PureComponent {
  render() {
    const { size, color, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator
          size={size || "large"}
          color={color || "#979797"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8
  }
});