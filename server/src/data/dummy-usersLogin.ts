import bcrypt from 'bcryptjs';

export const usersLogin = [
  {
    user_name: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
];
