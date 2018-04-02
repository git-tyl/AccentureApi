const API_STEM = "https://private-fd094-accentureapi1.apiary-mock.com";
const LIST_NAME = "users"

function fetchUsers(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}`;

  return fetch(url)
    .then(response => {      
      return response.json()
      }
    )
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

function postUsers(userName,userTitle) {

  let url = `${API_STEM}/${LIST_NAME}`;
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      title: userTitle,
    }),
  })
  .then(response => response.json())
  .then(responseJson => {
    return responseJson;
  }).catch(error => {
    console.error(error);
  });

}

//gets one single user
function findUser(userID) {

  let url = `${API_STEM}/${LIST_NAME}/${userID}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });

}

function updatesUser(userID) {

  let url = `${API_STEM}/${LIST_NAME}/${userID}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });

}


function deleteUser(id) {

  let url = `${API_STEM}/${LIST_NAME}/${id}`;
  fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(responseJson => {
    return responseJson;
  })
  .catch(error => {
    console.error(error);
  });

}

export default { fetchUsers: fetchUsers,postUsers:postUsers };
