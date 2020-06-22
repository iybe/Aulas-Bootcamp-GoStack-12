/**
 * Para criar: name(opcional), password, email
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  password: string;
  email: string;
  techs: Array<string | TechObject>
}

export default function createUser({ name = '', password, email} : CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}