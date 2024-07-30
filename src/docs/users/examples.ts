const usersExample = {
  summary: 'an example of users response WITHOUT query string request',
  value: {
    status: 'success',
    message: 'User successfully retreived',
    "users": [
      {
        id: '6127b1a7-edf4-491f-af40-ea5b9495d3d8',
        username: "John",
        email: "jDoe@me.fr",
        password: "123Pasword"
      },
      {
        id: '45cc8cdc-e36e-4970-af37-fee9088e2fb0',
        username: "Jane", email: "jane.Doe@me.fr",
        password: "Password123"
      },
      {
        id: '196cab8b-0284-4d0a-85c6-d171051b8966',
        username: "Emma", email: "EmmaDoe@me.fr",
        password: "Password"
      },
    ],
    "errors": null
  }
};


const usersQueryExample = {
  summary: 'an example of users response WITH query string request (username=John&email=emmaDoe@me.fr)',
  value: {
    status: 'success',
    message: 'User info for query username=John&email=emmaDoe@me.fr successfully retreived',
    "users": [
      {
        id: '6127b1a7-edf4-491f-af40-ea5b9495d3d8',
        username: "John",
        email: "jDoe@me.fr",
        password: "123Pasword"
      },
      {
        id: '196cab8b-0284-4d0a-85c6-d171051b8966',
        username: "Emma", email: "EmmaDoe@me.fr",
        password: "Password"
      },
    ],
    "errors": null
  }
};

export { usersExample, usersQueryExample };