import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Form, Space, Switch } from "antd";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";

export default function FieldsForm() {
  const form = Form.useFormInstance();
  return (
    <Form.List name={"fields"}>
      {(fields, { add, remove, move }) => {
        return (
          <>
            {fields.map(({ key: k, name }) => (
              <div key={k} className="mb-5 rounded-lg border border-gray-200">
                <div className="mb-3 flex items-center justify-between rounded-lg bg-gray-300 p-3">
                  <Form.Item noStyle shouldUpdate>
                    {() => {
                      return (
                        <div className="text-base font-semibold">
                          {form.getFieldValue(["fields", name, "label"])}
                        </div>
                      );
                    }}
                  </Form.Item>
                  <Space className="cursor-pointer">
                    <ArrowUpOutlined onClick={() => move(name, name - 1)} />
                    <ArrowDownOutlined onClick={() => move(name, name + 1)} />
                    <CopyOutlined
                      onClick={() =>
                        add(
                          {
                            ...form.getFieldValue(["fields", name]),
                          },
                          name + 1,
                        )
                      }
                    />
                    <DeleteOutlined
                      onClick={() => remove(name)}
                      className="text-red-600"
                    />
                  </Space>
                </div>
                <div className="m-auto max-w-[800px]">
                  <EFormItem label="Tiêu đề" required name={[name, "label"]}>
                    <EInput />
                  </EFormItem>
                  <EFormItem
                    label="Required?"
                    name={[name, "required"]}
                    valuePropName="checked"
                  >
                    <Switch />
                  </EFormItem>
                  <EFormItem
                    label="Giá trị mặc định"
                    name={[name, "defaultValue"]}
                  >
                    <EInput />
                  </EFormItem>
                </div>
              </div>
            ))}

            <Button
              type="default"
              onClick={() => add({})}
              className="float-right"
            >
              Thêm câu hỏi
            </Button>
          </>
        );
      }}
    </Form.List>
  );
}
