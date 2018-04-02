import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

const styles = StyleSheet.create({
  UserItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 2,
    padding: 5,
    height: 175
  },
  cover: { flex: 1, height: 150, resizeMode: "contain" },
  info: {
    flex: 3,
    alignItems: "flex-start",
    flexDirection: "column",
    alignSelf: "center",
    padding: 20
  },
  name: { fontSize: 18, fontWeight: "bold" },
  title: { fontSize: 18 }
});

class UserItem extends Component {

  render() {
    return (
      <View style={styles.UserItem}>
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.title}>Position: {this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default UserItem;
