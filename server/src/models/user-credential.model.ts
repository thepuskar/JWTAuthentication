import {Entity, model, property} from '@loopback/repository';

@model({name: 'user_credentials'})
export class UserCredential extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    name: 'password',
  })
  password: string;

  @property({
    type: 'string',
    required: true,
    name: 'user_id',
  })
  userId: string;

  [prop: string]: any;

  constructor(data?: Partial<UserCredential>) {
    super(data);
  }
}

export interface UserCredentialRelations {}

export type UserCredentialsWithRelations = UserCredential &
  UserCredentialRelations;
