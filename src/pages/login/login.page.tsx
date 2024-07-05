import { App, Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import authApis from "~/apis/auths.api";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";

function LoginPage() {
  const { message } = App.useApp();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { accessToken } = await authApis.login(values);
    message.success("Đăng nhập thành công!");
    localStorage.setItem("accessToken", accessToken);
    navigate("/");
  };

  return (
    <>
      <h2 className="mb-6 text-center text-2xl font-semibold">Đăng nhập</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <EFormItem label="Username" name="username" required>
          <EInput />
        </EFormItem>

        <EFormItem label="Password" name="password" required>
          <EInput type="password" />
        </EFormItem>

        <div className="mb-3">
          <span>Chưa có tài khoản?</span>
          <Link to="/auth/register" className="ml-1 text-blue-500">
            Đăng ký ngay
          </Link>
        </div>

        <EFormItem>
          <Button type="primary" htmlType="submit" className="w-full">
            Đăng nhập
          </Button>
        </EFormItem>
      </Form>
    </>
  );
}

export default LoginPage;
