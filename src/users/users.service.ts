import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    // 在真实的项目中, 这里应该是从数据库中获取数据,且密码应该是加密后的
    {
      userId: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      userId: 2,
      username: 'tao',
      password: '123456',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
