import User from "../../types/Users/User";

async function fetchUser(_user: User): Promise<User> {
  console.log('pass through asynchrone task');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(_user);
    },
      1000
    );
  });
};

export default fetchUser;