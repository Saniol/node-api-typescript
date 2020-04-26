import { EntityRepository, Repository } from 'typeorm';
import { BrowseParams } from '../../types/QueryParams';
import User from '../entity/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  browse({
    page = 1,
    pageSize = 10,
    orderBy = 'id',
    orderDir = 'ASC',
  }: BrowseParams) {
    const toSkip = (page - 1) * pageSize;

    return this.findAndCount({
      skip: toSkip,
      take: pageSize,
      order: {
        [orderBy]: orderDir,
      },
    });
  }
}
