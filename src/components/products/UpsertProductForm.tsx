import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { API_ENDPOINTS } from '@/service/client/apiEndpoints';
import { useCrudOpertions } from '@/service/crud';
import { Product } from '@/types';
import APP_ROUTES from '@/utils/routes';

import Button from '../ui/Button';
import Input from '../ui/Input';

type UpsertProductFormProps = {
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

const UpsertProductForm = ({ initialValues }: UpsertProductFormProps) => {
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

  const { handleSubmit, handleBlur, handleChange, values, errors } = useFormik({
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

export default UpsertProductForm;
