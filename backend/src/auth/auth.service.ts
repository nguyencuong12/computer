import { Injectable } from '@nestjs/common';
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

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (user && isPasswordMatch) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };

    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }

  async signIn(userInfo: LoginDTO) {
    const user = await this.userService.findUser(userInfo.username);
    const isPasswordMatch = await bcrypt.compare(
      userInfo.password,
      user.password,
    );
    if (isPasswordMatch) {
      const payload = {
        sub: user['_id'],
        username: user.username,
        roles: user.role,
      };

      var access_token = await this.jwtService.signAsync(payload);
      console.log('ACCESS_TOKEN', access_token);
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
