import { Select } from "antd";
import { useMemo } from "react";
import { ESelectProps } from "./types";

export default function ESelect({
  allowClear = true,
  placeholder: originalPlaceholder,
  filterOption = (input, option) => {
    return ((option?.label as string) ?? "")
      .toLowerCase()
      .includes(input.toLowerCase());
  },
  ...rest
}: ESelectProps) {
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
    <Select
      filterOption={filterOption}
      allowClear={allowClear}
      placeholder={placeholder}
      {...rest}
    />
  );
}
