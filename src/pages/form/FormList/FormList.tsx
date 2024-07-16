import { useQuery } from "@tanstack/react-query";
import formApis from "~/apis/forms.api";
import { getColumns } from "./services";
import ETable from "~/components/ETable";
import { App, Button, Space } from "antd";
import { useRefetch } from "~/hooks/query/useRefetch";
import useFilter from "~/hooks/query/filter/useFilter";
import { useNavigate } from "react-router-dom";

export default function FormList() {
  const { message } = App.useApp();
  const [filter, setFilter] = useFilter();
  const navigate = useNavigate();

  const queryKey = ["forms", filter];
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => formApis.list(filter),
  });

  const refetchList = useRefetch(queryKey);

  const handleDelete = async (id: string) => {
    await formApis.delete(id);
    refetchList();
    message.success("Xoá form thành công");
  };

  const handleEdit = (id: string) => {
    navigate(`/form/edit/${id}`);
  };

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold">Danh sách form</h1>
        <Space>
          <Button type="primary" onClick={() => navigate("/form/add")}>
            Tạo mới
          </Button>
        </Space>
      </div>
      <ETable
        loading={isLoading}
        dataSource={data?.data}
        columns={getColumns({ onDelete: handleDelete, onEdit: handleEdit })}
        pagination={{
          showSizeChanger: true,
          total: data?.meta.total,
          pageSize: +(filter.perPage as any) || 10,
          current: +(filter.page as any) || 1,
        }}
        onChange={(pagination) => {
          setFilter({
            page: pagination.current,
            perPage: pagination.pageSize,
          });
        }}
      />
    </>
  );
}
