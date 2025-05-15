import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/auth.utils.js';
import { studentLogin } from '../../data/student-login-bcrypt-hashsync.js';



const authResolver = {
  Mutation: {
    login: async (_: any, { user_name, password }: any) => {
     
       // ✅ Combine lists
       const allUsers = [...studentLogin];


      const user = allUsers.find((u: any) => u.user_name === user_name);

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
