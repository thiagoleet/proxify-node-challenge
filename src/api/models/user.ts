export interface RegisterUserDto {
  email: string;
  role: 'user' | 'admin';
}

export interface UserCreatedDto {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}
