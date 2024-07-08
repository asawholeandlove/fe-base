import {
  BellOutlined,
  CarOutlined,
  FormOutlined,
  LogoutOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import useAuthStore from "~/stores/auth.store";

export default function Header() {
  const currentUser = useAuthStore((state) => state.currentUser);
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-0 flex h-[65px] items-center justify-between border-b border-gray-300 bg-white px-10">
      <div className="flex items-center gap-2">
        <FormOutlined className="relative top-[2px] text-[40px] text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold">Survey App</h1>
          <p className="text-sm text-gray-500">Phỏng vấn ứng viên</p>
        </div>
      </div>
      <div className="flex gap-3">
        <MailOutlined className="cursor-pointer text-xl" />
        <BellOutlined className="cursor-pointer text-xl" />
        <Dropdown
          menu={{
            items: [
              {
                label: "Thông tin cá nhân",
                key: "profile",
                icon: <UserOutlined />,
              },
              {
                key: "logout",
                label: "Đăng xuất",
                icon: <LogoutOutlined />,
                onClick() {
                  localStorage.removeItem("accessToken");
                  navigate("/auth/login");
                },
              },
            ],
          }}
        >
          <div className="flex cursor-pointer items-center gap-2">
            <img
              src={
                "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              }
              alt="avatar"
              className="size-6 rounded-full"
            />

            <p className="text-lg font-bold underline">
              {currentUser?.username}
            </p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
