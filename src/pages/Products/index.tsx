import { ColumnType } from 'rc-table';
import { useNavigate } from 'react-router-dom';

import CrudTable from '@/components/common/CrudTable';
import Button from '@/components/ui/Button';
import { API_ENDPOINTS } from '@/service/client/apiEndpoints';
import { Product } from '@/types';
import APP_ROUTES from '@/utils/routes';

const columns: ColumnType<Product>[] = [
  {
    title: 'ID',
    className: 'cursor-pointer',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    className: 'cursor-pointer',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    className: 'cursor-pointer',
    dataIndex: 'price',
    key: 'price',
  },
];

const Products = () => {
  const navigate = useNavigate();

  const onAdd = () => {
    navigate(APP_ROUTES.ADD_PRODUCTS);
  };

  const onEdit = (record: Product) => {
    navigate(`${APP_ROUTES.PRODUCTS}/${record.id}`);
  };

  const Buttons = () => (
    <div>
      <Button onClick={onAdd}>Add Product</Button>
    </div>
  );

  return (
    <>
      <CrudTable<Product>
        tableTitle="Products"
        buttons={<Buttons />}
        columns={columns}
        endpoint={API_ENDPOINTS.PRODUCTS}
        rowKey="id"
        onEdit={onEdit}
      />
    </>
  );
};

export default Products;
