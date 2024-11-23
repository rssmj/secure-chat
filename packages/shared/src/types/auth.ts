export interface User {
    id: string;
    email: string;
    email_confirmed_at?: string;
    last_sign_in_at?: string;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignupCredentials extends LoginCredentials {
    confirmPassword: string;
  }