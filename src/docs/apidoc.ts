import createUser from './users/createUser';
import { userBodySchema, userSchema, userResponseSchema, usersResponse, responseUsersSchema } from './users/usersSchemas';
import { usersExample, usersQueryExample } from './users/examples';
import { deleteUser } from './users/deleteUserById';
import { getUsers } from './users/getUsers';
import { getUserById } from './users/getUserById';

const apiDocumentation = {
  openapi: '3.0.1',
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
      name: 'Users API',
    }
  ],
  paths: {
    '/api/users': {
      post: createUser,
    },
    '/api/users/{id}': {
      delete: deleteUser,
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

      userBodySchema,
      userSchema,
      userResponseSchema,
      usersResponse,
      responseUsersSchema,
    },
    examples: {
      usersExample,
      usersQueryExample
    }
  }
};

export { apiDocumentation };