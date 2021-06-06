import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../dtos';
import { User } from '../entities/User';

interface IUsersRepository {
  findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}

export {IUsersRepository }