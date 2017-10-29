import { UserRepository } from '../repository/user-repository';
import { User } from '../model/user';
export class UserCore {

    static userRepository: UserRepository = new UserRepository()

    save(user: User): Boolean {
        UserCore.userRepository.add(user)
        return true
    }

    list(): User[] {
        return UserCore.userRepository.list()
    }
}