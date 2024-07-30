import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";
import User from "../../../types/Users/User";
import fetchUser from "../../../services/users/fetchUser";
import findUserById from "../../../services/users/findUserById";



const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('GetUsersByIdController');
    const { id } = req.params;
    if (findUserById(id)) {
      const user = await fetchUser(findUserById(id)!);
      sendSuccess(res, 200, `User  info for ID: ${id} successfully retreived`, user);
    } else {
      throw new DatabaseError(`{user controller error (getUsersById: No user matches with id ${req.params.id})`);
    }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    // throw new DatabaseError('user controller error');
  } catch (error) {
    return next(error);
  }
};

export default getUserById;