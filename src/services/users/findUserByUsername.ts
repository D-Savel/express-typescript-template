import { users } from "../../datas/users";
import User from "../../types/User";

function findUserByUsername(_username: string) {
  const user = users.find((item) => {
    return item.username == _username;
  });
  return user;
};

export default findUserByUsername;