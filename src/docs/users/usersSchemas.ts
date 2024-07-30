const userBodySchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      example: 'Johnny',
    },
    email: {
      type: 'string',
      example: 'johnny@email.com',
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '!1234Johnny#',
    }
  },
};

const userSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      example: 'new random created uuid',
    },
    username: {
      type: 'string',
      example: 'Johnny',
    },
    email: {
      type: 'string',
      example: 'johnny@email.com',
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '!1234Johnny#',
    }
  },
};

const userResponseSchema = {
  type: 'object',
  properties: {
    user: {
      $ref: '#/components/schemas/userSchema'
    }
  }
};

const usersResponse = {
  type: 'array',
  examples: [
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
  ]
};


const responseUsersSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        "users": {
          type: 'array',
        }
      }
    },
    errors: {
      type: null,
      example: null
    }
  }
};




export {
  userBodySchema, userResponseSchema, usersResponse, userSchema,
  responseUsersSchema,
};