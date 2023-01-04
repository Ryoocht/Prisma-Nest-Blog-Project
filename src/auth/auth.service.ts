import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const result = await this.usersService.findOneByEamil(email);
    if (result || result.password !== password) return false;
    return result;
  }

  registerUser(createUserDto: CreateUserDto) {
    return '';
  }
}
