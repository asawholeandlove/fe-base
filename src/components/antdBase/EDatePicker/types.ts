import { DatePickerProps } from "antd";

export interface EDatePickerProps
  extends Omit<DatePickerProps, "value" | "onChange"> {
  label?: string;
  value?: number;
  onChange?: (value?: number) => void;
}
