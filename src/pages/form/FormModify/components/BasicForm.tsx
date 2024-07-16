import { Switch } from "antd";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";

export default function BasicForm() {
  return (
    <>
      <EFormItem label="Tiêu đề" name="title" required>
        <EInput />
      </EFormItem>

      <EFormItem
        label="Public form?"
        name="isPublic"
        valuePropName="checked"
        initialValue={true}
      >
        <Switch />
      </EFormItem>
    </>
  );
}
