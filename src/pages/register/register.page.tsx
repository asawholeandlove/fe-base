import { App, Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userApis from "~/apis/users.api";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { message } = App.useApp();

  const onFinish = async (values: any) => {
    setLoading(true);
    await userApis.create(values);
    message.success("Đăng ký thành công. Bạn đã có thể đăng nhập!");
    navigate("/auth/login");

    setLoading(false);
  };

  return (
    <>
      <h2 className="mb-6 text-center text-2xl font-semibold">Đăng ký</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <EFormItem label="Username" name="username" required>
          <EInput />
        </EFormItem>

        <EFormItem label="Password" name="password" required>
          <EInput />
        </EFormItem>

        <EFormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            Đăng ký
          </Button>
        </EFormItem>
      </Form>
    </>
  );
}

export default RegisterPage;
