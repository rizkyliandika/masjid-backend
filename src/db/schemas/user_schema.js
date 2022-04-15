import { EntitySchema } from "typeorm";
import User from '../../models/user';

export const UserSchema = new EntitySchema({
    name: 'User',
    target: User,
    tableName: 'user',
    columns: {
        id: {
            type: 'int',
            unique: true,
            generated: true,
            nullable: false,
            primary: true
        },
        name: {
            type: 'varchar',
            length: 50,
        },
        password: {
            type: 'varchar',
            length: 50
        },
        age: {
            type: 'int',
        },
        address: {
            type: 'varchar',
            length: 100
        },
        role: {
            type: 'varchar',
            length: 50,
        },
        createdAt: {
            type: 'timestamp',
            default: () => "CURRENT_TIMESTAMP",
        },
        updatedAt: {
            type: 'timestamp',
            default: () => "CURRENT_TIMESTAMP",
        }
    },
    relations: {
        post: {
            target: 'Post',
            type: 'one-to-many',
            inversSide: 'postId',
            joinColumn: true,
            cascade: true,
        }
    }
})