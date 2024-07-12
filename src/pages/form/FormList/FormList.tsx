import { useQuery } from "@tanstack/react-query";
import formApis from "~/apis/forms.api";
import { getColumns } from "./services";
import ETable from "~/components/ETable";

export default function FormList() {
  const { data, isLoading } = useQuery({
    queryKey: ["forms"],
    queryFn: () => formApis.list(),
  });

  return (
    <>
      <ETable
        loading={isLoading}
        dataSource={data?.data}
        columns={getColumns()}
        pagination={{
          total: data?.meta.total,
        }}
      />
    </>
  );
}
