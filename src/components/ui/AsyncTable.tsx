import RCTable, { TableProps } from 'rc-table';

import Loader from './Loader/Loader';

interface AsyncTableProps<T> extends TableProps<T> {
  isLoading?: boolean;
  loadingText?: string;
}

const AsyncTable = <T extends object>(props: AsyncTableProps<T>) => {
  const { isLoading, loadingText, ...tableProps } = props;
  return (
    <>
      {isLoading ? (
        <Loader text={loadingText} />
      ) : props.data && props.data?.length > 0 ? (
        <RCTable {...tableProps} />
      ) : (
        <p>No Data found</p>
      )}
    </>
  );
};

export default AsyncTable;
