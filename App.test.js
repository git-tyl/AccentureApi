import React from 'react';
import App from './App';
import UserAPI from "./Components/UserAPI"
import renderer from 'react-test-renderer';

//the problem
//https://github.com/facebook/jest/issues/2071

// const XMLHttpRequest = require('xhr2');
// global.XMLHttpRequest = XMLHttpRequest;
// require("isomorphic-fetch");

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

//REST TESTS

test('gets all users', async () => {
  let data;
  try {
   data = await UserAPI.fetchUsers();
    console.log("---------------data--------------");
    console.log(data);
    // UserAPI.fetchUsers().then(responseJson => {
    //   console.log(responseJson);
    //   });
    // });

    UserAPI.fetchUsers()
    .then(responseJson => {
      console.log("----------responseJson-------------------");
      console.log(responseJson);
      return responseJson.json()
    })
    .then(response => {
      console.log("----------response-------------------");
      console.log(response);
      return response;
    })

    expect(fetchUsers()).resolves.toBe("Jay");

    // expect(fetchUsers()).resolves).toBe()
    UserAPI.fetchUsers().then(users => expect(users).toBe(true));
    // return expect(fetchUsers()).resolves.toBe(....)

  } catch(e) {
    // expect(e.response.data.error).toMatchSnapshot();
  }
});

//POST test positive
test('post test create user', async () => {
  // const response = await API.login('test-account@example.com', 'supersecret!');
  //     expect(response).toMatchSnapshot();
});

//POST test negative
test('post test create user', async () => {

});

//PUT test positive
test('able to update user object', async () => {

});

//PUT test negative
test('unable to update user object due to wrong data', async () => {

});

//Delete Test positive
test('able to deletes user', async () => {

});

//Delete Test negative
test('unable to deletes user due to wrong data', async () => {

});
