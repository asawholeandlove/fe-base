import { Switch } from "antd";
import EFormItem from "~/components/antdBase/EFormItem";
import Editor from "~/components/Editor";

interface Props {
  name: string;
}

export default function Page({ name }: Props) {
  return (
    <div className="m-auto max-w-[800px]">
      <EFormItem name={[name, "isShow"]} label="Hiển thị?" initialValue={true}>
        <Switch />
      </EFormItem>

      <EFormItem name={[name, "content"]} required label="Nội dung">
        <Editor />
      </EFormItem>
    </div>
  );
}
