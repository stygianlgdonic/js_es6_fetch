// since user 23 does not exists ...
fetch('https://reqres.in/api/users/23')
  .then(res => {

    if (res.ok) {
      console.log('Success')
    } else {
      console.log('Not Successful')
    }

  })
  .catch(() => console.log("error"))

  // even though we get a 404 response fetch always works unless the browser fails to connect or network error
