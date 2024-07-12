import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 top-[65px] w-[260px]">
      <Menu
        defaultSelectedKeys={["forms"]}
        mode="inline"
        className="h-full pt-3"
        items={[
          {
            label: <Link to="/">Forms</Link>,
            key: "forms",
          },
          {
            label: <Link to="/config">Config</Link>,
            key: "config",
          },
        ]}
      />
    </div>
  );
}
