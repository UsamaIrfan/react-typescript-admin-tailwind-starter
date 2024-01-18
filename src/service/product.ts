import { useQuery } from 'react-query';

import { Product } from '@/types';

import { API_ENDPOINTS } from './client/apiEndpoints';
import { productClient } from './client/product';

export const useProductQuery = () => {
  const { data, error, isLoading } = useQuery<Product[], Error>(
    [API_ENDPOINTS.PRODUCTS],
    () => productClient.getProducts(),
  );

  return {
    products: data,
    error,
    isLoading,
  };
};
