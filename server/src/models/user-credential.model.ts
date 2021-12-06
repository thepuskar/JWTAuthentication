import {Entity, model, property} from '@loopback/repository';

@model({name: 'user_credentials'})
export class UserCredentials extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
    name: 'user_id',
  })
  userId: string;

  [prop: string]: any;

  constructor(data?: Partial<UserCredentials>) {
    super(data);
  }
}

export interface UserCredentialsRelations {}

export type UserCredentialsWithRelations = UserCredentials &
  UserCredentialsRelations;
