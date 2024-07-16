import { Button, Form, Input, Select, Switch } from "antd";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";

export default function FieldsForm() {
  return (
    <Form.List name={"fields"}>
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map(({ key, name }) => (
              <div key={key} className="mb-5 border border-gray-200">
                <div className="flex items-center justify-between"></div>
                <div className="m-auto max-w-[800px]">
                  <EFormItem label="Tiêu đề" required name={[name, "label"]}>
                    <EInput />
                  </EFormItem>
                  <EFormItem
                    label="Required?"
                    required
                    name={[name, "required"]}
                    valuePropName="checked"
                  >
                    <Switch />
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
