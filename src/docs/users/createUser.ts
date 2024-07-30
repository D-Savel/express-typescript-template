import { error404Schema, error400BodySchema, error500Schema } from "../errors/errorsSchemas";

const createUser = {
  tags: ['Users API'],
  summary: 'Create a new user',
  description: 'Create a new user',
  operationId: 'createUser',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/userBodySchema',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: "User created successfully => return user(new user) properties",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success',
              },
              message: {
                type: 'string',
                example: 'User Johnny successfully created',
              },
              data: {
                type: 'object',
                $ref: '#/components/schemas/userResponseSchema',
              },
              errors: {
                type: null,
                example: null
              }
            },
          },
        },
      },
    },
    '400': error400BodySchema('username', 'email', 'johnny@email'),
    '404': error404Schema,
    '500': error500Schema,
  }
};


export default createUser;