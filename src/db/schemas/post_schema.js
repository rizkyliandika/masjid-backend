import { EntitySchema } from 'typeorm';
import Post from '../../models/post';

export const PostSchema = new EntitySchema({
    name: 'Post',
    target: Post,
    tableName: 'post',
    columns: {
        id: {
            type: 'int',
            unique: true,
            generated: true,
            nullable: false,
            primary: true
        },
        title: {
            type: 'varchar',
            length: 100,
        },
        description: {
            type: 'varchar',
            length: 300,
        },
        image: {
            type: 'varchar',
            length: 100,
        },
        createdAt: {
            type: 'date',
        },
        updatedAt: {
            type: 'date',
        }
    },
    // relations: {
    //     category: {
    //         target: 'ca',
    //         type: 'many-to-one',
    //         joinColumn: true,
    //     }
    // }
})