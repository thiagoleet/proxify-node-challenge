export interface RegisterUser {
  email: string;
  role: 'user' | 'admin';
}

export interface UserCreated {
  email: string;
  password: string;
}
