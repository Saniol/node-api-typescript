import { Entity, Column } from 'typeorm';
import BaseEntity from './BaseEntity';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export default class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;
}
