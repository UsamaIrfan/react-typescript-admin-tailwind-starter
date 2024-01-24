import { TableProps } from 'rc-table';
import { ReactNode } from 'react';

import AsyncTable from '@/components/ui/AsyncTable';
import Button from '@/components/ui/Button';
import { useCrudOpertions } from '@/service/crud';

interface CrudTableProps<T> extends TableProps<T> {
  onEdit: (record: T) => void;
  endpoint: string;
  buttons?: ReactNode;
  tableTitle?: string;
}

const CrudTable = <T extends object>({
  endpoint,
  columns = [],
  buttons,
  tableTitle,
  onEdit,
  ...props
}: CrudTableProps<T>) => {
  const { useBaseQuery, useDeleteBaseMutation } = useCrudOpertions<T>(endpoint);

  const { data, isLoading } = useBaseQuery();

  const { mutate: deleteBase, isLoading: deleting } = useDeleteBaseMutation();

  const handleDelete = (record: any) => {
    deleteBase(record?.id);
  };

  const handleEdit = (record: T) => {
    onEdit(record);
  };

  const editColumn = {
    title: 'Actions',
    key: 'actions',
    render: (_: any, record: T) => (
      <div className="flex space-x-4">
        <Button variant="normal" onClick={() => handleEdit(record)}>
          Edit
        </Button>
        <Button
          variant="outline"
          loading={deleting}
          onClick={() => handleDelete(record)}
        >
          Delete
        </Button>
      </div>
    ),
  };

  const tableColumns = [...columns, editColumn];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl">{tableTitle}</h2>
        {buttons}
      </div>
      <AsyncTable<T>
        isLoading={isLoading}
        columns={tableColumns}
        data={data}
        rowKey="id"
        {...props}
      />
    </div>
  );
};

export default CrudTable;
