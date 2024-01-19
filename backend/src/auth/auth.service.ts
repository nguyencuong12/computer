import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/LoginDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(userInfo: LoginDTO) {
    const user = await this.userService.findUser(userInfo.username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordMatch = await bcrypt.compare(
      userInfo.password,
      user.password,
    );
    if (isPasswordMatch) {
      const payload = {
        sub: user['_id'],
        username: user.username,
        roles: user.role,
        thisistest: '',
      };
      //   var access_token = await this.jwtService.signAsync(payload);
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
      //TESTING EXTRACT TOKEN PACKAGE !!!
      //   const payload_ex = await this.jwtService.verifyAsync(access_token, {
      //     secret: process.env.JWT_SECRET,
      //   });
      //   console.log('PAYLOAD EX', payload_ex);

      //   return {
      //     access_token: await this.jwtService.signAsync(payload),
      //   };
    }
  }
}
