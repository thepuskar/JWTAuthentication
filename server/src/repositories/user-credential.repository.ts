import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {UserServiceBindings} from '@loopback/authentication-jwt';
import {UserCredential, UserCredentialRelations} from '../models';

export class UserCredentialRepository extends DefaultCrudRepository<
  UserCredential,
  typeof UserCredential.prototype.id,
  UserCredentialRelations
> {
  constructor(
    @inject(`datasources.${UserServiceBindings.DATASOURCE_NAME}`)
    dataSource: juggler.DataSource,
  ) {
    super(UserCredential, dataSource);
  }
}
