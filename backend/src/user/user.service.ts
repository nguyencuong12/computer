import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/auth/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createNewUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await this.userModel.create(createUserDTO);
    newUser.role = [Role.User];
    newUser.password = await bcrypt.hash(newUser.password, 10);
    //ENCRYPT PASSWORD AND SAVE IN DATABASE !!

    return newUser.save();
  }
  async findUserByID(id: string): Promise<User | undefined> {
    const user = await this.userModel.findById(id);
    return user;
  }
  async findUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username: username });

    return user;
  }
}
