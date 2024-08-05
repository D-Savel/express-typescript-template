import { error404Schema, error422Schema, error500Schema } from "../errors/errorsSchemas";

const parameters = {
  dbEntity: 'user', //searched entity in db
  keyName: 'id', // key for query string in path
  keyValue: "45cc8cdc-e36e-4970-af37-fee9088e2fb0",// value for query string in path
};

const getUserById = {
  tags: ['Users'],
  summary: 'Get a user on a single ID',
  description: 'Get a user  on a single ID',
  operationId: 'getUserById',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      "name": parameters.keyName,
      "in": "path",
      "description": "User id",
      "type": "string",
      "default": parameters.keyValue,
    }
  ],
  responses: {
    '200': {
      description: 'User retrieved successfully!',
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
                example: `User with Id: ${parameters.keyValue} has been successfully retrieved`,
              },
              data: {
                type: 'object',
                example: {
                  user:
                  {
                    id: '45cc8cdc-e36e-4970-af37-fee9088e2fb0',
                    username: "Jane",
                    email: "jane.doe@me.fr",
                    password: "Password123"
                  }
                },
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
    '400': {
      description: 'Bad Request: Bad path parameters for request (ex: id value = 12345)',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/ErrorResponseSchema' },
          example: {
            status: 'error',
            message: 'Bad Request : Bad body or path parameters for request',
            data: {
              errors:
                [
                  {
                    type: 'field',
                    value: '12345',
                    msg: 'user id is not valid, must be a UUID version 4',
                    path: 'id',
                    location: 'params'
                  },
                ]
            }
          }
        }
      }
    },
    '404': error404Schema,
    '422': error422Schema(parameters.keyName, parameters.dbEntity, parameters.keyValue.slice(1, -1)),
    '500': error500Schema,
  }
};

export { getUserById };