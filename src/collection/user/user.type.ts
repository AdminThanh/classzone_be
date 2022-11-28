import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from '../../type';
import { ClassType } from '../class/class.type';

@ObjectType('User')
export class UserType {
  @Field((_type) => ID)
  _id: string;

  @Field()
  id: string;

  @Field()
  email: string;

  password: string;

<<<<<<< HEAD
=======
  // @Field(() => GraphQLUpload)
  // avatar: Promise<FileUpload>;
>>>>>>> 0da0018c20619b436fbbd6771746f0c32ad48f72
  @Field({ nullable: true })
  avatar: string;

  @Field((_type) => Role, { nullable: true })
  role: Role;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field((_type) => [ClassType], { nullable: true })
  classes: string[];

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ defaultValue: 0 })
  token_version: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
