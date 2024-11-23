import axios from 'axios';
import type { LoginCredentials, SignupCredentials } from '@secure-chat/shared';

export class AuthClient {
  private api;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(credentials: LoginCredentials) {
    const { data } = await this.api.post('/auth/login', credentials);
    return data;
  }

  async signup(credentials: SignupCredentials) {
    const { data } = await this.api.post('/auth/signup', credentials);
    return data;
  }
}