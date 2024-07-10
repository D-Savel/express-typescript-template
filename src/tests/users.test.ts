import request from "supertest";
import { app } from "../server.js";
import User from "../types/User";
import { expect } from "chai";

const users: User[] = [
  { id: '6127b1a7-edf4-491f-af40-ea5b9495d3d8', username: "John", email: "jDoe@me.fr", password: "123Pasword" },
  { id: '45cc8cdc-e36e-4970-af37-fee9088e2fb0', username: "Jane", email: "jane.Doe@me.fr", password: "Password123" },
  { id: '196cab8b-0284-4d0a-85c6-d171051b8966', username: "Emma", email: "EmmaDoe@me.fr", password: "Password" },
];

const newUserData = {
  "username": "Johnny",
  "email": "johnnye@mail.com",
  "password": "johnny20!@"
};


describe('- Users CRUD TEST -', function () {

  describe("GET USERS)", function () {
    it('it should return status 200 and Users List in data response', async function () {
      const response = await request(app)
        .get(`/api/users`);
      expect(response.status).equal(200);
      expect(response.body.status).equal('success');
      expect(response.body.data).to.be.an("array");
      expect(response.body.errors).is.null;
    });
  });

  // let createdCustomerId: string;

  // describe("CREATE NEW CUSTOMER WHEN DOESN'T EXIST(with email: EMAIL_TEST@TEST.FR')", function () {
  //   it('it should create a customer with status 200 and return created customer data', async function () {
  //     const response = await request(app)
  //       .post('/clients/ajouter_modifier')
  //       .send({ customer });
  //     expect(response.status).equal(201);
  //     expect(response.body.email).equal(customer.email);
  //     expect(response.body.type).equal(customer.type);
  //     createdCustomerId = response.body.id;
  //   });
  // });

  // describe("UPDATE CUSTOMER TYPE WITH 'LEGAL_PERSON' FOR CREATED CUSTOMER ID", function () {
  //   it("it should update a customer with status 201 and and return 'LEGAL_PERSON' for type value in response", async function () {
  //     const response = await request(app)
  //       .put(`/clients/${createdCustomerId}/modifier`)
  //       .send({
  //         type: 'LEGAL_PERSON'
  //       });
  //     expect(response.status).equal(201);
  //     expect(response.body.newCustomer.type).equal('LEGAL_PERSON');
  //   });
  // });

  // describe("UPDATE CUSTOMER TYPE WITH FALSE TYPE FOR CREATED CUSTOMER ID", function () {
  //   it("it should return status 500 when customer updated with no authorized type value", async function () {
  //     const response = await request(app)
  //       .put(`/clients/${createdCustomerId}/modifier`)
  //       .send({ type: 'FALSE_TYPE' });
  //     expect(response.status).equal(500);
  //   });
  // });

  // describe("DELETE CUSTOMER CREATED CUSTOMER ID", function () {
  //   it("it should return status 200 when customer deleted", async function () {
  //     const response = await request(app)
  //       .delete(`/clients/${createdCustomerId}/supprimer`);
  //     expect(response.status).equal(200);
  //   });
  //   it("'it should return status 200 and empty response body for getting deleted customer with 'EMAIL_TEST@TEST.FR' value", async function () {
  //     const response = await request(app)
  //       .get(`/clients/email?email=${customer.email}`);
  //     expect(response.status).equal(200);
  //     expect(response.body).is.empty;
  //   });
  // });
});