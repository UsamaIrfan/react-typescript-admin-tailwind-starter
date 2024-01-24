import { useMutation, useQuery, useQueryClient } from 'react-query';

import Base from './client/base';

export const useCrudOpertions = <EntityType extends object>(
  baseEndpoint: string,
) => {
  const baseUrl = `${baseEndpoint}`;
  const queryClient = useQueryClient();
  const baseService = new Base<EntityType>(baseUrl);

  const useBaseQuery = () =>
    useQuery<EntityType[], Error>(baseEndpoint, () => baseService.find());

  const useBaseByIdQuery = (id: string | number) =>
    useQuery<EntityType, Error>([baseEndpoint, id], () =>
      baseService.getById(id),
    );

  const useCreateBaseMutation = () =>
    useMutation((variables: Partial<EntityType>) =>
      baseService.create(variables),
    );

  const useUpdateBaseMutation = () =>
    useMutation(
      ({
        id,
        variables,
      }: {
        id: string | number;
        variables: Partial<EntityType>;
      }) => baseService.update(id, variables),
    );

  const useDeleteBaseMutation = () =>
    useMutation((id: string | number) => baseService.delete(id), {
      onSuccess: () => queryClient.invalidateQueries(baseEndpoint),
    });

  return {
    useBaseQuery,
    useBaseByIdQuery,
    useCreateBaseMutation,
    useUpdateBaseMutation,
    useDeleteBaseMutation,
  };
};
