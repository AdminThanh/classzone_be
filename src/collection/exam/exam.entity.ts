import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Exam {
  @ObjectIdColumn()
  _id: ObjectID;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  questions: string[];

  @Column()
  tags: string[];

  @Column()
  classRoom: string;

  @Column()
  dateFrom: Date;

  @Column()
  dateEnd: Date;

  @Column()
  minutes: number;

  @Column()
  questionAmount: number;

  @Column()
  scoreFactor: number;

  @Column()
  isAllowReview: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
