import React, { Component } from "react";
// import QuestionList from "./Components/QuestionList"
import UserList from "./Components/UserList"
// export default QuestionList

import {
  StackNavigator,
} from 'react-navigation';

const RootStack = StackNavigator({
  Home: { screen: UserList },
});


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
