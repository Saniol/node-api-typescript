import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  public createdAt: Date;

  @Column('timestamp', { nullable: true })
  public updatedAt: Date;

  @BeforeInsert()
  public setCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updatedAt = new Date();
  }
}
