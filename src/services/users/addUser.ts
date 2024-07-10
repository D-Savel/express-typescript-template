import { users } from "../../datas/users";
import User from "../../types/User";

// add user to users without update data in "../../datas/users" to simulate create request
function addUser(_newUser: User): User {
  try {
    users.push(_newUser);
  } catch (error) {
  }
  return (_newUser);
};

export default addUser;