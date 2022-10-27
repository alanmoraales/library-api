import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar' })
  @Field()
  title: string;

  @Column({ type: 'varchar' })
  @Field()
  imageUrl: string;

  @Column({ type: 'varchar' })
  @Field()
  description: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  availableQuantity: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field()
  updatedAt: Date;
}
