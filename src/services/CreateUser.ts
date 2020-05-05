
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject >;
  // techs: string[];  // Se for apenas um array de strings;
}

export default function createUser({name="", email, password}: CreateUserData ) {
  const user = {
    name,
    email, 
    password
  }

  return user;
}