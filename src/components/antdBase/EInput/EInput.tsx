import { Input } from "antd";
import { useMemo } from "react";
import { EInputProps } from "./types";

export default function EInput({
  allowClear = true,
  placeholder: originalPlaceholder,
  ...rest
}: EInputProps) {
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

  return <Input allowClear={allowClear} placeholder={placeholder} {...rest} />;
}
