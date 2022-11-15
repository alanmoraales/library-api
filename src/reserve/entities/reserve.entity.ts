import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CartItem } from '../../carts/entities';
import { User } from '../../users/entities';
import { EReserveStatus } from '../../reserve/enums';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Reserve {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => CartItem, (cartItem) => cartItem.reserve)
  @Field(() => [CartItem])
  items: CartItem[];

  @Column({ type: 'varchar', default: EReserveStatus.PENDING_FOR_RECOLLECTION })
  @Field()
  status: EReserveStatus;

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
