import {Entity, model, property} from '@loopback/repository';

@model({name: 'users'})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'string',
    name: 'username',
    required: true,
  })
  username?: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
    name: 'email',
  })
  email: string;

  @property({
    type: 'boolean',
    name: 'email_verified',
  })
  emailVerified?: boolean;

  @property({
    type: 'string',
    name: 'verification_token',
  })
  verificationToken?: string;

  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {}

export type UserWithRelations = User & UserRelations;
