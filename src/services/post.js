import { AppDataSource } from "../db/connection";
import Post from '../models/post';

export default class PostService {
    postRepository() {
        return AppDataSource.getRepository(Post);
    }

    findAll() {
        return this.postRepository().find();
    }

    findOne(id) {
        return this.postRepository().findOne(id);
    }

    create(itemData) {
        return this.postRepository().save(itemData);
    }

    update(itemData) {
        return this.postRepository().save(itemData);
    }

    delete(id) {
        return this.postRepository().delete(id);
    }
}
