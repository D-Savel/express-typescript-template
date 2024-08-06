import request, { Response } from "supertest";
import app from "../server.js";
import { expect } from 'chai';
import _ from 'lodash';
import User from "../types/Users/User.js";

describe('- Users CRUD TEST -', function () {
  const userObjectKeysNumber = 4;
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
    it('it should status equal to \'success\' in response ', async function () {
      expect(response.body.status).equal('success');
    });
    it('it should error is null in response', async function () {
      expect(response.body.errors).is.null;
    });
    it('it should users to be an array of object in data response', async function () {
      expect(response.body.data.users).to.be.an('array');
      for (const user of response.body.data.users) {
        expect(user).to.be.an('object');
      }
    });
    it(`it should all user object in array data.users response containing 4 keys: (${(userObjectKeys)})`, async function () {
      for (const user of response.body.data.users) {
        expect(Object.keys(user).length).equal(userObjectKeysNumber);
        expect(user).to.have.all.keys([...userObjectKeys]);
      }
    });
  });

  describe("GET USERS BY (username, email)", function () {
    describe("GET USERS for existing username", function () {
      before(async function () {
        return (
          response = await request(app)
            .get(`/api/users?username=john`)
        );
      });
      it('it should return status 200', async function () {
        expect(response.status).equal(200);
      });
      it('it should status equal to \'success\' in response ', async function () {
        expect(response.body.status).equal('success');
      });
      it('it should error is null in response', async function () {
        expect(response.body.errors).is.null;
      });
      it('it should users to be an array of object in data response', async function () {
        expect(response.body.data.users).to.be.an('array');
        for (const user of response.body.data.users) {
          expect(user).to.be.an('object');
        }
      });
      it(`it should user object in array data.users response containing 4 keys: (${(userObjectKeys)})`, async function () {
        for (const user of response.body.data.users) {
          expect(Object.keys(user).length).equal(userObjectKeysNumber);
          expect(user).to.have.all.keys([...userObjectKeys]);
        }
      });
    });
    describe("GET USERS for existing email", function () {
      before(async function () {
        return (
          response = await request(app)
            .get(`/api/users?email=jane.doe%40me.fr`)
        );
      });
      it('it should return status 200', async function () {
        expect(response.status).equal(200);
      });
      it('it should status equal to \'success\' in response ', async function () {
        expect(response.body.status).equal('success');
      });
      it('it should error is null in response', async function () {
        expect(response.body.errors).is.null;
      });
      it('it should users to be an array of object in data response', async function () {
        expect(response.body.data.users).to.be.an('array');
        for (const user of response.body.data.users) {
          expect(user).to.be.an('object');
        }
      });
      it(`it should all user object in array data.users response containing 4 keys: (${(userObjectKeys)})`, async function () {
        for (const user of response.body.data.users) {
          expect(Object.keys(user).length).equal(userObjectKeysNumber);
          expect(user).to.have.all.keys([...userObjectKeys]);
        }
      });
      it(`it should one of user object in array data.users response have property username:John or email:emmaDoe@me.fr`, async function () {
        //Use lodash library to check if the predicate returns true for any element of an array
        // _.some(array, [predicate])
        //predicate(Function) parameter holds the function invoked per iteration
        expect(_.some(response.body.data.users, { 'email': 'jane.doe@me.fr' })).to.be.true;
      });
    });
    describe("GET USERS for existing username and email", function () {
      before(async function () {
        return (
          response = await request(app)
            //Username validation in server transforms first letter of username to upper case
            .get(`/api/users?username=john&email=emmaDoe%40me.fr`)
        );
      });
      it('it should return status 200', async function () {
        expect(response.status).equal(200);
      });
      it('it should status equal to \'success\' in response ', async function () {
        expect(response.body.status).equal('success');
      });
      it('it should error is null in response', async function () {
        expect(response.body.errors).is.null;
      });
      it('it should users to be an array of object in data response', async function () {
        expect(response.body.data.users).to.be.an('array');
        for (const user of response.body.data.users) {
          expect(user).to.be.an('object');
        }
      });
      it(`it should user object in array data.users response containing 4 keys: (${(userObjectKeys)})`, async function () {
        for (const user of response.body.data.users) {
          expect(Object.keys(user).length).equal(userObjectKeysNumber);
          expect(user).to.have.all.keys([...userObjectKeys]);
        }
      });
      it(`it should one of user object in array data.users response have property username:John or email:emmaDoe@me.fr`, async function () {
        //Use lodash library to check if the predicate returns true for any element of an array
        // _.some(array, [predicate])
        //predicate(Function) parameter holds the function invoked per iteration
        expect(_.some(response.body.data.users, { 'username': 'John' })).to.be.true;
        expect(_.some(response.body.data.users, { 'email': 'emmaDoe@me.fr' })).to.be.true;
      });
    });
    describe("GET USERS for unexisting username in query", function () {
      before(async function () {
        return (
          response = await request(app)
            .get(`/api/users?username=Johny`)
        );
      });
      it('it should return status 422 for unexisting username in query', async function () {
        expect(response.status).equal(422);
      });
    });
    describe("GET USERS for unexisting email in query", function () {
      before(async function () {
        return (
          response = await request(app)
            .get(`/api/users?email=emma@me.fr`)
        );
      });
      it('it should return status 422 for unexisting email in query', async function () {
        expect(response.status).equal(422);
      });
    });
    describe("GET USERS for unexisting username and email in query", function () {
      before(async function () {
        return (
          response = await request(app)
            .get(`/api/users?username=johny&email=emma@me.fr`)
        );
      });
      it('it should return status 422 for unexisting username,email in query', async function () {
        expect(response.status).equal(422);
      });
    });
  });

  describe("DEL USER", function () {
    before(async function () {
      return (
        response = await request(app)
          .del(`/api/users/6127b1a7-edf4-491f-af40-ea5b9495d3d8`)
      );
    });
    it('it should return status 200', async function () {
      expect(response.status).equal(200);
    });
    it('it should return success for status key', async function () {
      expect(response.body.status).equal('success');
    });
    it('it should error is null in response', async function () {
      expect(response.body.errors).to.be.null;
    });
    it('it should data is null in response', async function () {
      expect(response.body.data).to.be.null;
    });
  });

  describe("Get USER BY ID", function () {
    before(async function () {
      return (
        response = await request(app)
          .get(`/api/users/45cc8cdc-e36e-4970-af37-fee9088e2fb0`)
      );
    });
    it('it should return status 200', async function () {
      expect(response.status).equal(200);
    });
    it('it should status equal to \'success\' in response ', async function () {
      expect(response.body.status).equal('success');
    });
    it('it should error is null in response', async function () {
      expect(response.body.errors).is.null;
    });
    it(`it should user to be an object in data.user response containing 4 keys: ${(userObjectKeys)}`, async function () {
      expect(response.body.data.user).to.be.an('object');
      expect(Object.keys(response.body.data.user).length).equal(userObjectKeysNumber);
      expect(response.body.data.user).to.have.all.keys([...userObjectKeys]);
    });
  });
});