import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
import { Role } from '../../auth/enums/role.enum';

@Schema({ versionKey: false })
export class User {
  @Prop({ required: true, unique: true })
  username: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
