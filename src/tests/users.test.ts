import request, { Response } from "supertest";
import app from "../server.js";
import { expect } from 'chai';

describe('- Users CRUD TEST -', function () {
  const userKeysNumber = 4;
  const userObjectKeys = ['id', 'username', 'email', 'password'];
  let response: Response;

  describe("GET USERS", function () {
    before(async function () {
      return (
        response = await request(app)
          .get(`/api/users`)
      );
    });
    it('it should return status 200', async function () {
      expect(response.status).equal(200);
    });
    it('it should return success for status key', async function () {
      expect(response.body.status).equal('success');
    });
    it('it should return null for error key in response', async function () {
      expect(response.body.errors).is.null;
    });
    it('it should data response to be an array', async function () {
      // expext(response.body.data).to.be.an("array");
      expect(response.body.data).to.be.an("array");
    });
    it('it should user object in response containing 4 keys', async function () {
      for (const user of response.body.data) {
        expect(Object.keys(user).length).equal(userKeysNumber);
      }
    });
    it('it should user object in response containing keys ([id,username,email,password])', async function () {
      for (const user of response.body.data) {
        expect(user).to.have.all.keys([...userObjectKeys]);
      }
    });

    describe("DEL USER", function () {
      before(async function () {
        return (
          response = await request(app)
            .del(`/api/users/6127b1a7-edf4-491f-af40-ea5b9495d3d8`)
        );
      });
      it('it should return status 200', async function () {
        //console.log('Data:', response.body);
        expect(response.status).equal(200);
      });
      it('it should return success for status key', async function () {
        expect(response.body.status).equal('success');
      });
      it('it should return null for error key in response', async function () {
        expect(response.body.errors).is.null;
      });
      it('it should user object in response containing 4 keys', async function () {
        expect(Object.keys(response.body.data).length).equal(userKeysNumber);
      });
      it('it should user object in response containing keys ([id,username,email,password])', async function () {
        expect(response.body.data).to.have.all.keys([...userObjectKeys]);

      });
    });

  });
});