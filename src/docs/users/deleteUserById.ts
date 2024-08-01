import { error404Schema, error422Schema, error500Schema } from "../errors/errorsSchemas";

const parameters = {
  dbEntity: 'user', //searched entity in db
  keyName: 'id',  // key for query string in path
  keyValue: "6127b1a7-edf4-491f-af40-ea5b9495d3d8", // value for query string in path
};

const deleteUser = {
  tags: ['Users'],
  summary: 'Delete a user on a single ID',
  description: 'Delete a user  on a single ID',
  operationId: 'delUserById',
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
      "default": parameters.keyValue,
    }
  ],
  responses: {
    '200': {
      description: 'User deleted successfully!',
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
                example: `User with Id: ${parameters.keyValue} has been successfully deleted`,
              },
              data: {
                type: null,
                example: null,
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
    '422': error422Schema(parameters.keyName, parameters.dbEntity, parameters.keyValue.slice(1, -1)),
    '500': error500Schema,
  }
};

export { deleteUser };



