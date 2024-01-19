import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { JwtAuthGuard } from './guard/jwt.guard';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorators/role.decorator';
import { Role } from './enums/role.enum';
import { LoginDTO } from './dto/LoginDto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createNewUser(createUserDTO);
    return user;
  }

  @Post('/login')
  async login(@Body() loginDTO: LoginDTO) {
    return this.authService.signIn(loginDTO);
    //SEND BACK ACCESS_TOKEN CLIENT WILL STORE IT
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/admin')
  getDashboard(@Request() req) {
    return req.user;
  }
}
