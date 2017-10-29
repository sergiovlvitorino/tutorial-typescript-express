import { User } from '../model/user';
export class UserRepository{
    users:User[] = []

    add(user:User):Boolean{
        this.users.push(user)
        return true
    }

    list():User[]{
        return this.users
    }
}