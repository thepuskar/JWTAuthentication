import {Entity, hasOne, model, property} from '@loopback/repository';
import {UserCredential} from './user-credential.model';

@model({
  name: 'users',
})
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
    name: 'realm',
  })
  realm?: string;

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

  @hasOne(() => UserCredential, {keyTo: 'userId'})
  userCredential: UserCredential;

  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {}

export type UserWithRelations = User & UserRelations;
