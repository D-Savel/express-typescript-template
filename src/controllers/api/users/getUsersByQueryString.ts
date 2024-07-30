import { NextFunction, Request, Response } from "express";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { users } from "../../../datas/users";
import User from "../../../types/Users/User";
import UserQueries from "../../../types/Users/userQueries";
import UserQuery from "../../../types/Users/userQueries";
import fetchUsers from "../../../services/users/fetchUsers";
import { DatabaseError } from "../../../errors/DatabaseError";


function findUsersBy(queries: UserQueries): User[] | undefined {
  const arrayOfQuerries = Object.entries(queries);
  let findUser: User[];
  let filteredUsers: User[] = [];

  for (const query of arrayOfQuerries) {
    findUser = [];
    findUser = users.filter((user) => {
      const userValueForKey = user[query[0]];
      const queryValueForKey = query[1];
      return userValueForKey!.localeCompare(queryValueForKey!) === 0;
    });
    if (findUser.length) {
      //Use Set method to Remove Duplicates
      filteredUsers = [... new Set([...filteredUsers, ...findUser])];
    }
  }
  return filteredUsers;
}

const getUsersByQueryString = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usersForQuery = findUsersBy(req.query as UserQuery);
    const usersResponse = await fetchUsers(usersForQuery!);
    if (usersForQuery!.length) {
      let entry: string[];
      const entries = Object.entries((req.query));
      let data = entries.map(([key, val]) => {
        return `${key}=${val}`;
      });
      sendSuccess(res, 200, `User info for query ${data} successfully retreived`.replace(',', '&'), usersForQuery!);
    } else {
      throw new DatabaseError("User controller error (getUsersByQuery: No user(s) match(es) with query ${JSON.stringify(req.query)}");
    }
  } catch (error) {
    return next(error);
  }
};

export default getUsersByQueryString;