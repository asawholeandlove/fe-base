import {
  DeleteOutlined,
  EditFilled,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Dropdown, TableProps, Tag } from "antd";
import { TForm } from "~/types/forms.type";

interface Props {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const getColumns = ({ onDelete, onEdit }: Props) => {
  const columns: TableProps<TForm>["columns"] = [
    { title: "Tiêu đề", dataIndex: "title" },
    {
      title: "Sửa đổi lần cuối",
      dataIndex: "updatedAt",
      width: 250,
      render: (updatedAt: string) => new Date(updatedAt).toLocaleString(),
    },
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
    {
      title: "Hành động",
      dataIndex: "_id",
      align: "center",
      width: 150,
      render: (_id: string) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: "edit",
                  label: "Sửa",
                  icon: <EditFilled />,
                  onClick: () => onEdit(_id),
                },
                {
                  key: "delete",
                  label: "Xoá",
                  icon: <DeleteOutlined />,
                  onClick: () => onDelete(_id),
                },
              ],
            }}
          >
            <EllipsisOutlined className="cursor-pointer" />
          </Dropdown>
        );
      },
    },
  ];
  return columns;
};
