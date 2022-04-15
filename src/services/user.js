import { AppDataSource } from "../db/connection";
import User from '../models/user';

export default class UserService {
    userRepository() {
        return AppDataSource.getRepository(User);
    }

    findAll() {
        return this.userRepository().find();
    }

    findOne(id) {
        return this.userRepository().findOne(id);
    }

    save(itemData) {
        return this.userRepository().save(itemData);
    }

    update(itemData) {
        return this.userRepository().save(itemData);
    }

    delete(id) {
        return this.userRepository().delete(id);
    }
}
