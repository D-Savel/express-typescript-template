import { error404Schema, error422Schema, error500Schema } from "../errors/errorsSchemas";

const parameter = {
  Keyname: 'id',
  value: "45cc8cdc-e36e-4970-af37-fee9088e2fb0",
};

const getUserById = {
  tags: ['Users API'],
  summary: 'Get a user on a single ID',
  description: 'Get a user  on a single ID',
  operationId: 'getUserById',
  security: [
    {
      bearerAuth: [],
    },
  ],
  "parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "User id",
      "type": "string",
      "default": parameter.value,
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
                example: `User with Id: ${parameter.value} has been successfully retrieved`,
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
    '404': error404Schema,
    '422': error422Schema(parameter.Keyname, 'user', parameter.value.slice(1, -1)),
    '500': error500Schema,
  }
};

export { getUserById };