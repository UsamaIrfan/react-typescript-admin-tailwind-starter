import { ColumnType } from 'rc-table';
import React from 'react';

import Loader from '@/components/ui/loader/loader';
import { Table } from '@/components/ui/table';
import { useProductQuery } from '@/service/product';
import { Product } from '@/types';

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
  const { products, isLoading } = useProductQuery();
  return (
    <>
      {isLoading ? (
        <Loader text="Loading products" />
      ) : products && products?.length > 0 ? (
        <div>
          <Table columns={columns} data={products} rowKey="id" />
        </div>
      ) : (
        <p>No Data found</p>
      )}
    </>
  );
};

export default Products;
