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

describe('Get All Users',() => {

  let response;

  beforeAll(async () => {
    response = await UserAPI.fetchUsers();
  });

  test('gets all users return 200', () => {
    // let response = await UserAPI.fetchUsers();
    expect(response.status).toBe(200);
  });

  test('gets all users returns correct data', () => {

    console.log(response.data.results);
    expect(response.data.results).toMatchSnapshot();
  });
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
