import { AxiosRequestConfig } from 'axios';

import { HttpClient } from './httpClient';

export default class Base<EntityType> {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  all = (params?: AxiosRequestConfig['params']): Promise<EntityType[]> => {
    return HttpClient.get(`${this.baseUrl}/all`, { params });
  };

  find = (params?: AxiosRequestConfig['params']): Promise<EntityType[]> => {
    return HttpClient.get(this.baseUrl, { params });
  };

  getById = (
    id: number | string,
    params?: AxiosRequestConfig['params'],
  ): Promise<EntityType> => {
    return HttpClient.get(`${this.baseUrl}/${id}`, { params });
  };

  create = (
    variables: Partial<EntityType>,
    options?: AxiosRequestConfig,
  ): Promise<any> => {
    return HttpClient.post(this.baseUrl, variables, options);
  };

  update = (
    id: number | string,
    variables: Partial<EntityType>,
  ): Promise<any> => {
    return HttpClient.put(`${this.baseUrl}/${id}`, variables);
  };

  delete = (id: number | string): Promise<any> => {
    return HttpClient.delete(`${this.baseUrl}/${id}`);
  };
}
