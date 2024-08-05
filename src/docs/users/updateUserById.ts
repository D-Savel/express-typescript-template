import { error404Schema, error400BodySchema, error422Schema, error500Schema } from "../errors/errorsSchemas";

const parameters = {
  dbEntity: 'user', //searched entity in db
  keyName: 'id', // key for query string in path
  keyValue: "45cc8cdc-e36e-4970-af37-fee9088e2fb0", // value for query string in path
};

const updateUser = {
  tags: ['Users'],
  summary: 'Update a user',
  description: 'Update a user',
  operationId: 'UpdateUser',
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
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/UserUpdateBodySchema',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: "User update successfully => return user(new user) properties",
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
                users: {
                  type: 'object',
                  example: {
                    id: 'New random uuid',
                    username: 'Johnny',
                    email: 'johnny@email.com',
                    password: '!1234Johnny#'
                  },
                }
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
      description: 'Bad Request : Bad body or path parameters for request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/ErrorResponseSchema' },
          examples: {
            Error400BodyExample: {
              $ref: '#/components/examples/Error400BodyExample'
            },
            error400IdExample: {
              $ref: '#/components/examples/Error400IdExample'
            },
            error400BadBodyExample: {
              $ref: '#/components/examples/Error400BadBodyExample'
            }
          }
        }
      }
    },
    '422': error422Schema(parameters.keyName, parameters.dbEntity, parameters.keyValue.slice(1, -1)),
    '404': error404Schema,
    '500': error500Schema,
  }
};


export default updateUser;