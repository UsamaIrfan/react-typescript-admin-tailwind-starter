import { AuthResponse, LoginInput } from '@/types';

import { API_ENDPOINTS } from './apiEndpoints';
import { HttpClient } from './httpClient';

export const userClient = {
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, variables);
  },
};
