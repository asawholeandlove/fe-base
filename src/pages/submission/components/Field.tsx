import { Form, Radio } from "antd";
import { useMemo } from "react";
import EDatePicker from "~/components/antdBase/EDatePicker";
import EFormItem from "~/components/antdBase/EFormItem";
import EInput from "~/components/antdBase/EInput";
import ESelect from "~/components/antdBase/ESelect";
import ETextArea from "~/components/antdBase/ETextArea";
import { TField, TFieldType } from "~/types/forms.type";

const mappingEditor: Record<keyof typeof TFieldType, any> = {
  DATE: EDatePicker,
  INPUT: EInput,
  RADIO: Radio.Group,
  SELECT: ESelect,
  TEXTAREA: ETextArea,
};

interface Props {
  data: TField;
  name: any;
}

export default function Field({ data, name }: Props) {
  const { type, label, required, options, defaultValue } = data;

  const Editor = useMemo(() => mappingEditor[type], [type]);

  return (
    <EFormItem
      name={name}
      required={required}
      label={label}
      initialValue={defaultValue}
    >
      <Editor
        label={label}
        placeholder=" "
        options={options?.map((value) => ({
          label: value,
          value,
        }))}
      />
    </EFormItem>
  );
}
