import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../database/entity/User';

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);

  if (!user) {
    response.status(404).json({
      success: false,
    });
    return;
  }

  response.json(user);
};
