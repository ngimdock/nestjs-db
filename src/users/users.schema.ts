import { EntitySchema } from 'typeorm';
import { User } from './users.entity';

export const usersSchema = new EntitySchema<User>({
  name: 'User',
  target: User,

  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },

    firstname: {
      type: String,
    },

    lastname: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },

  //   relations: {
  //     photos: {
  //       type: 'one-to-many',
  //       target: 'photo',
  //     },
  //   },
});
