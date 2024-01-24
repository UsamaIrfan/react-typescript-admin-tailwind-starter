import { ColumnType } from 'rc-table';
import { useNavigate } from 'react-router-dom';

import CrudTable from '@/components/common/CrudTable';
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

  return (
    <>
      <CrudTable<Product>
        tableTitle="Products"
        columns={columns}
        endpoint={API_ENDPOINTS.PRODUCTS}
        onEdit={onEdit}
        onAdd={onAdd}
      />
    </>
  );
};

export default Products;
