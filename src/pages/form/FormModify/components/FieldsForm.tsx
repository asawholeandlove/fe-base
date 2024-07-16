import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Form, Space, Switch } from "antd";
import { map } from "lodash";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";
import ESelect from "~/components/antdBase/ESelect";
import { TFieldType } from "~/types/forms.type";

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
                  <EFormItem
                    label="Loại câu hỏi"
                    required
                    name={[name, "type"]}
                    initialValue={TFieldType.INPUT}
                  >
                    <ESelect
                      options={map(TFieldType, (value, key) => ({
                        label: key,
                        value,
                      }))}
                    />
                  </EFormItem>
                  <EFormItem label="Tiêu đề" required name={[name, "label"]}>
                    <EInput />
                  </EFormItem>
                  <EFormItem
                    label="Bắt buộc?"
                    name={[name, "required"]}
                    valuePropName="checked"
                    initialValue={false}
                  >
                    <Switch />
                  </EFormItem>
                  <Form.Item noStyle shouldUpdate>
                    {() => {
                      const type = form.getFieldValue(["fields", name, "type"]);

                      return (
                        [TFieldType.RADIO, TFieldType.SELECT].includes(
                          type,
                        ) && (
                          <EFormItem
                            name={[name, "options"]}
                            label="Các lựa chọn"
                          >
                            <ESelect mode="tags" />
                          </EFormItem>
                        )
                      );
                    }}
                  </Form.Item>
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
