import { useParams } from 'react-router-dom';

import UpsertProductForm from '@/components/products/UpsertProductForm';
import { API_ENDPOINTS } from '@/service/client/apiEndpoints';
import { useCrudOpertions } from '@/service/crud';
import { Product } from '@/types';

const EditProduct = () => {
  const params = useParams();

  const { useBaseByIdQuery } = useCrudOpertions<Product>(
    API_ENDPOINTS.PRODUCTS,
  );

  const { data } = useBaseByIdQuery(params?.id as string);

  return (
    <div>
      <h2 className="font-sans text-2xl mb-5">Edit Product</h2>
      {data ? <UpsertProductForm initialValues={data} /> : null}
    </div>
  );
};

export default EditProduct;
