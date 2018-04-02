const API_STEM = "https://private-328652-tyl.apiary-mock.com/";
const LIST_NAME = "questions"

function fetchQuestions(list_name = LIST_NAME) {
  let url = `${API_STEM}${LIST_NAME}`;

  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchQuestions: fetchQuestions };
