import { Input } from "antd";
import { useMemo } from "react";
import { ETextAreaProps } from "./types";

export default function ETextArea({
  allowClear = true,
  placeholder: originalPlaceholder,

  ...rest
}: ETextAreaProps) {
  const { label } = rest;

  const lowerLabel = useMemo(() => {
    if (typeof label === "string") {
      return label.toLowerCase();
    }
  }, [label]);

  const placeholder = useMemo(() => {
    if (lowerLabel && !originalPlaceholder) {
      return `Nhập ${lowerLabel}`;
    }
    return originalPlaceholder;
  }, [lowerLabel, originalPlaceholder]);

  return (
    <Input.TextArea
      allowClear={allowClear}
      placeholder={placeholder}
      {...rest}
    />
  );
}
