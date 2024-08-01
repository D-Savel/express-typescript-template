import createUser from './users/createUser';
import { UserBodySchema, UserSchema, UserResponseSchema, UsersResponseSchema, UserUpdateBodySchema } from './users/usersSchemas';
import { usersExample, usersQueryExample } from './users/examples';
import { deleteUser } from './users/deleteUserById';
import { getUsers } from './users/getUsers';
import { getUserById } from './users/getUserById';
import updateUser from './users/updateUserById';


const apiDocumentation = {
  openapi: '3.1.0',
  info: {
    version: '0.1',
    title: 'User REST API - Documentation',
    description: 'user template REST API',
    license: {
      name: 'ISC License',
    },
  },
  servers: [
    {
      url: 'http://localhost:9000/',
      description: 'Local Server',
    }
  ],
  tags: [
    {
      name: 'API',
    }
  ],
  paths: {
    '/api/users': {
      post: createUser,
    },
    '/api/users/{id}': {
      get: getUserById,
      delete: deleteUser,
      put: updateUser
    },
    '/api/users/{id}/': {
      get: getUserById,
    },
    '/api/users/': {
      get: getUsers,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {

      UserBodySchema,
      UserSchema,
      UserResponseSchema,
      UsersResponseSchema,
      UserUpdateBodySchema
    },
    examples: {
      usersExample,
      usersQueryExample
    }
  }
};

export { apiDocumentation };