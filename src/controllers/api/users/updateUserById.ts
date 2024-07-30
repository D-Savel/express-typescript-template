import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";
import User from "../../../types/Users/User";
import fetchUser from "../../../services/users/fetchUser";
import findUserById from "../../../services/users/findUserById";
import updateUser from "../../../services/users/updateUser";


const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (findUserById(id)) {
      updateUser(req, id, (findUserById(id)!));
      const userResponse = await fetchUser(findUserById(id)!);
      sendSuccess(res, 201, `User for Id: ${req.params.id} has been successfully updated`, userResponse);
    } else {
      throw new DatabaseError(`{user controller error (updateUsersById: No user matches with id ${req.params.id})`);
    }
  } catch (error) {
    return next(error);
  }
};

export default updateUserById;