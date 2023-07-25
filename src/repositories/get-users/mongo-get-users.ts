import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "felipe",
        lastName: "wow",
        email: "hghgghgh@getMaxListeners.com",
        password: "123456",
      },
    ];
  }
}
