import { TableProps, Tag } from "antd";
import { TForm } from "~/types/forms.type";

export const getColumns = () => {
  const columns: TableProps<TForm>["columns"] = [
    { title: "Tiêu đề", dataIndex: "title" },
    {
      title: "Trạng thái",
      dataIndex: "isPublic",
      width: 150,
      render: (isPublic: boolean) => (
        <Tag color={isPublic ? "blue-inverse" : "lime-inverse"}>
          {isPublic ? "Public" : "Private"}
        </Tag>
      ),
    },
    {
      title: "Tạo bởi",
      dataIndex: "createdByUsername",
      width: 150,
      render: (createdByUsername: string) => (
        <Tag color="green">{createdByUsername}</Tag>
      ),
    },
  ];
  return columns;
};
