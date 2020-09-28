fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(data => console.log(data))


// fetch returns a promise so we catch the response.
// since the responses' actual data is in json format, we use res.json.
// which also returns a promise so we can get the data from .then