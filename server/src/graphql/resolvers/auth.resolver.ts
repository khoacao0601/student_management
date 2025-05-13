// src/graphql/resolvers/auth.resolver.ts
import { usersLogin } from '../../data/dummy-usersLogin.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/auth.utils.js';

const authResolver = {
  Mutation: {
    login: async (_: any, { user_name, password }: any) => {
      const user = usersLogin.find(u => u.user_name === user_name);
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error('Invalid credentials');
      }

      const token = generateToken({ user_name: user.user_name });
      return {
        token,
        user: {
          user_name: user.user_name,
        }
      };
    }
  }
};

export default authResolver;
