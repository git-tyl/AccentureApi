import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import QuestionItem from "./QuestionItem";
import QuestionAPI from "./QuestionAPI";

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderItem = ({ item }) => {
    return (
      <QuestionItem
        question={item.question}
        published_at={item.published_at}
      />
    );
  };

  _addKeysToQuestions = questions => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return questions.map(question => {
      return Object.assign(question, { key: question.question });
    });
  };

  _refreshData = () => {
    QuestionAPI.fetchQuestions().then(questions => {
      console.log("sdfakjhsdfajhkfsdajkdfhsasadfjkh");
      console.log(questions);
      this.setState({ data: this._addKeysToQuestions(questions) });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default QuestionList;
