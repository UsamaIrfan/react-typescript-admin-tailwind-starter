import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';

import Base from './client/base';

export const useCrudOpertions = <EntityType extends object>(
  baseEndpoint: string,
) => {
  const baseUrl = `${baseEndpoint}`;
  const queryClient = useQueryClient();
  const baseService = new Base<EntityType>(baseUrl);

  const useBaseQuery = ({
    options,
  }: {
    options?:
      | Omit<
          UseQueryOptions<EntityType[], Error, EntityType[], QueryKey>,
          'queryKey' | 'queryFn'
        >
      | undefined;
  }) =>
    useQuery<EntityType[], Error>(
      baseEndpoint,
      () => baseService.find(),
      options,
    );

  const useBaseByIdQuery = (id: string | number) =>
    useQuery<EntityType, Error>(
      [baseEndpoint, id],
      () => baseService.getById(id),
      { enabled: !!id },
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
