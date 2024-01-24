import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { API_ENDPOINTS } from '@/service/client/apiEndpoints';
import { useCrudOpertions } from '@/service/crud';
import { Product } from '@/types';
import APP_ROUTES from '@/utils/routes';

type ProductFormProps = {
  initialValues?: Partial<Product>;
};

interface FormValues {
  title?: string;
  description?: string;
  category?: string;
  price?: number;
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Product title is required'),
  description: yup.string().required('Product description is required'),
  price: yup.number().required('Product price is required'),
  category: yup.string().required('Product category is required'),
});

const ProductForm = ({ initialValues }: ProductFormProps) => {
  const navigate = useNavigate();
  const { useCreateBaseMutation, useUpdateBaseMutation } =
    useCrudOpertions<Product>(API_ENDPOINTS.PRODUCTS);

  const { mutate: createProduct, isLoading: creating } =
    useCreateBaseMutation();
  const { mutate: updateProduct, isLoading: updating } =
    useUpdateBaseMutation();

  const onSuccess = () => {
    navigate(APP_ROUTES.PRODUCTS);
  };

  const onSubmit = (values: FormValues) => {
    if (initialValues?.id) {
      updateProduct({ id: initialValues.id, variables: values }, { onSuccess });
    } else {
      createProduct(values, {
        onSuccess,
      });
    }
  };

  const { handleSubmit, handleBlur, handleChange, values, errors, setValues } =
    useFormik({
      onSubmit,
      validationSchema,
      initialValues: {
        title: initialValues?.title,
        description: initialValues?.description,
        category: initialValues?.category,
        price: initialValues?.price,
      },
      validateOnChange: false,
      validateOnBlur: false,
    });

  useEffect(() => {
    if (initialValues) {
      setValues({
        title: initialValues.title,
        description: initialValues.description,
        category: initialValues.category,
        price: initialValues.price,
      });
    }
  }, [initialValues, setValues]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        label="Title"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values['title']}
        className="mb-4"
        error={errors?.title}
      />
      <Input
        name="description"
        label="Description"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values['description']}
        className="mb-4"
        error={errors?.description}
      />
      <Input
        name="price"
        label="Price"
        type="number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values['price']}
        className="mb-4"
        error={errors?.price}
      />
      <Input
        name="category"
        label="Category"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values['category']}
        className="mb-4"
        error={errors?.category}
      />
      <Button variant="normal" loading={creating || updating} type="submit">
        {initialValues ? 'Update' : 'Add'} Product
      </Button>
    </form>
  );
};

const AddEditProduct = () => {
  const params = useParams();

  const { useBaseByIdQuery } = useCrudOpertions<Product>(
    API_ENDPOINTS.PRODUCTS,
  );

  const { data } = useBaseByIdQuery(params?.id as string);

  return (
    <div>
      <h2 className="font-sans text-2xl mb-5">
        {params?.id ? 'Update' : 'Add'} Product
      </h2>
      <ProductForm initialValues={data} />
    </div>
  );
};

export default AddEditProduct;
