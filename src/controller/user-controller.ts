import { UserCore } from '../core/user-core';
import { User } from '../model/user';
export class UserController{

    private userCore:UserCore

    constructor(){
        this.userCore = new UserCore()
    }

    save(name:string, age:number) : Boolean{
        let user:User = new User();
        user.name = name;
        user.age = age;
        return this.userCore.save(user)
    }

    list():User[]{
        return this.userCore.list();
    }

}