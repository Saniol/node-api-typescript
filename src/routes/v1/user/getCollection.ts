import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepo from '../../../database/repository/User';
import { BrowseParams } from '../../../types/QueryParams';

export default async (request: Request, response: Response) => {
  const queryParams: BrowseParams = request.query;

  const userRepository = getCustomRepository(UserRepo);
  const [users, count] = await userRepository.browse(queryParams);

  response.set('Total-Count', String(count)).json(users);
};
