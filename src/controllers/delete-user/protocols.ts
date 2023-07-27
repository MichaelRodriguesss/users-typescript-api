import { User } from "../../models/user";
import { HttpRequest } from "../protocols";

export interface IDeleteUserController {
  handle(httpRequest: HttpRequest<any>): Promise<User>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
