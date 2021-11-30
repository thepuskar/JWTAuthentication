import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {UserCredential, UserCredentialRelations} from '../models';

export class UserCredentialRepository extends DefaultCrudRepository<
  UserCredential,
  typeof UserCredential.prototype.id,
  UserCredentialRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(UserCredential, dataSource);
  }
}
