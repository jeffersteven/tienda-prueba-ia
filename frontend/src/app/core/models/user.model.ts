// user.model.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  address?: Address;
}

export interface UserRole {
  id: string;
  name: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}