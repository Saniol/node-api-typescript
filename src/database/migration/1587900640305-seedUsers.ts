import { getRepository, MigrationInterface, In } from 'typeorm';
import User from '../entity/User';
import UserSeed from '../seed/UserSeed';

export default class seedUsers1587900640305 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(): Promise<any> {
    const userRepository = getRepository(User);

    await userRepository.save(UserSeed);
  }

  // eslint-disable-next-line class-methods-use-this
  public async down(): Promise<any> {
    const userRepository = getRepository(User);

    await userRepository.delete({
      email: In(UserSeed.map((user) => user.email)),
    });
  }
}
