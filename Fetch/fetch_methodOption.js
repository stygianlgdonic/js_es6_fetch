fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'new user'
  })
})
  .then(res => {

    return res.json()

  })
  .then(data => console.log(data))

// whenever we need to posting json data to the server,
// always set headers' content type to correct format i.e. application/json
// and also stringify the body, we cannot just send a javascript object.
