import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CartItem } from 'carts/entities';
import { User } from 'users/entities';
import { EReserveStatus } from 'reserve/enums';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => CartItem, (cartItem) => cartItem.reserve)
  items: CartItem[];

  @Column({ type: 'varchar', default: EReserveStatus.PENDING_FOR_RECOLLECTION })
  status: EReserveStatus;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
