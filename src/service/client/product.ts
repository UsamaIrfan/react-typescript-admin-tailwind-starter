import { Product } from '@/types';

import { API_ENDPOINTS } from './apiEndpoints';
import { HttpClient } from './httpClient';

export const productClient = {
  getProducts: () => {
    return HttpClient.get<Product[]>(API_ENDPOINTS.PRODUCTS);
  },
};
