import { Select } from "antd";
import { useMemo } from "react";
import { ESelectProps } from "./types";
import { StyledSelect } from "./styles";

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
      return `Chọn ${lowerLabel}`;
    }
    return originalPlaceholder;
  }, [lowerLabel, originalPlaceholder]);

  return (
    <StyledSelect
      filterOption={filterOption}
      allowClear={allowClear}
      placeholder={placeholder}
      {...rest}
    />
  );
}
