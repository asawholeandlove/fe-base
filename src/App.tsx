import { Button, Form, Input } from "antd";
import EFormItem from "./components/antdBase/EFormItem";
import EInput from "./components/antdBase/EInput";

function App() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-700">
      <div className="border-gray w-full max-w-md rounded-lg border bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>

        <Form layout="vertical" onFinish={onFinish}>
          <EFormItem label="Username" name="username" required>
            <EInput />
          </EFormItem>

          <EFormItem label="Password" name="password" required>
            <EInput />
          </EFormItem>

          <EFormItem>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </EFormItem>
        </Form>
      </div>
    </div>
  );
}

export default App;
