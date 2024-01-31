import { ColumnType } from 'rc-table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import CrudTable from '@/components/common/CrudTable';
import Badge from '@/components/ui/Badge';
import { IOrder } from '@/types';
import APP_ROUTES from '@/utils/routes';
import { ordersData } from '@/utils/static';

const Orders = () => {
  const navigate = useNavigate();

  const onEdit = (record: IOrder) => {
    navigate(`${APP_ROUTES.ORDERS}/${record.xid}`);
  };

  const columns: ColumnType<IOrder>[] = useMemo(
    () => [
      {
        title: 'ID',
        render: (_, order) => order.xid,
        key: 'id',
      },
      {
        title: 'Status',
        render: (_, order) => <Badge text={order.order_status} />,
        key: 'status',
        className: 'w-full text-center capitalize',
      },
      {
        title: 'Total',
        render: (_, order) => order.total,
      },
      {
        title: 'Discount',
        render: (_, order) => order.discount,
      },
      {
        title: 'Items',
        render: (_, order) => order.items?.length,
      },
    ],
    [],
  );

  return (
    <>
      <CrudTable<IOrder>
        tableTitle="Orders"
        columns={columns}
        buttons={<></>}
        onEdit={onEdit}
        data={ordersData}
      />
    </>
  );
};

export default Orders;
