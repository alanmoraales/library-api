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
  slug: string;

  @Column({ type: 'varchar' })
  @Field()
  coverSrc: string;

  @Column({ type: 'varchar' })
  @Field()
  synopsis: string;

  @Column({ type: 'varchar' })
  @Field()
  author: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  year: number;

  @Column({ type: 'varchar' })
  @Field()
  collection: string;

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
