import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

import UserItem from "./UserItem";
import UserAPI from "./UserAPI";

class UserList extends Component {

  _handlePost(){
    UserAPI.postUsers("jay","ceo").then(responseJson => {
      console.log("testttt");
      console.log(responseJson);
    });
  }

  static navigationOptions = {
    title: 'Users List',
    // headerRight: < Button title="Add" />,
  };

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderItem = ({ item }) => {
    return (
      <UserItem
        name={item.name}
        title={item.title}
      />
    );
  };

  _addKeysToUsers = users => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return users.map(user => {
      return Object.assign(user, { key: user.name });
    });
  };

  _refreshData = () => {
    UserAPI.fetchUsers().then(responseJson => {
      this.setState({ data: this._addKeysToUsers(responseJson.results) });
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <FlatList data={this.state.data} renderItem={this._renderItem} />
        </View>
        <View style={styles.bottomContainer}>
            <Button
              onPress={this._handlePost}
              title="Add"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });
const styles = StyleSheet.create({
  mainContainer: { flex: 1, paddingTop: 0 },
  container: { flex: 0.85, paddingTop: 0 } ,
  bottomContainer: { flex: 0.15, paddingTop: 0 }

});

export default UserList;
