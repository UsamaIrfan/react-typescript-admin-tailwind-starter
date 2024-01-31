import { useFormik } from 'formik';
import { ColumnType } from 'rc-table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import AsyncTable from '@/components/ui/AsyncTable';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { IOrderItem } from '@/types';
import APP_ROUTES from '@/utils/routes';
import { orderItemsData } from '@/utils/static';

const validationSchema = yup.object().shape({
  orders: yup.array().of(
    yup.object().shape({
      price: yup.number().required('Price is required.'),
      quantity: yup.number().required('Quantity is required.'),
    }),
  ),
});

interface FormOrder {
  price: number;
  quantity: number;
}

interface IFormValues {
  orders: FormOrder[];
}

const EditOrder = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(APP_ROUTES.ORDERS);
  };

  const { handleBlur, handleChange, handleSubmit, values, errors } =
    useFormik<IFormValues>({
      initialValues: {
        orders: orderItemsData.map((o) => ({
          price: o.unit_price,
          quantity: o.quantity,
        })),
      },
      onSubmit,
      validationSchema,
    });

  const columns: ColumnType<IOrderItem>[] = useMemo(
    () => [
      {
        title: 'ID',
        render: (_, order) => order.item_id,
        key: 'id',
      },
      {
        title: 'Name',
        render: (_, order) => order.name,
        key: 'name',
        className: 'w-full',
      },
      {
        title: 'Price',
        render: (_, _order, idx) => {
          return (
            <Input
              name={`orders.[${idx}].price`}
              value={values?.orders?.[idx]?.price}
              error={(errors?.orders?.[idx] as { price?: string })?.price}
              type="number"
              variant="outline"
              className="w-40"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          );
        },
      },
      {
        title: 'Quantity',
        render: (_, _order, idx) => (
          <Input
            name={`orders.[${idx}].quantity`}
            value={values?.orders?.[idx]?.quantity}
            error={(errors?.orders?.[idx] as { quantity?: string })?.quantity}
            type="number"
            variant="outline"
            className="w-40"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ),
      },
    ],
    [values, errors, handleBlur, handleChange],
  );

  return (
    <>
      <h2 className="text-2xl mb-2">Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <AsyncTable columns={columns} data={orderItemsData} />
        <div className="flex justify-end">
          <Button type="submit">Update Order</Button>
        </div>
      </form>
    </>
  );
};

export default EditOrder;
