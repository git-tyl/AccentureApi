import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

const styles = StyleSheet.create({
  QuestionItem: {
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
  title: { fontSize: 18 },
  published_at: { fontSize: 18, fontWeight: "bold" }
});

class QuestionItem extends Component {
  render() {
    return (
      <View style={styles.QuestionItem}>
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.question}</Text>
          <Text style={styles.published_at}>{this.props.published_at}</Text>
        </View>
      </View>
    );
  }
}

export default QuestionItem;
