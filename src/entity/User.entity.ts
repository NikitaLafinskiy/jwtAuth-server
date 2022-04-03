import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: false })
  isActive: boolean;
  @Column()
  activationLink: string;
  @Column({ type: 'longtext', nullable: true })
  refreshToken: string;
}
