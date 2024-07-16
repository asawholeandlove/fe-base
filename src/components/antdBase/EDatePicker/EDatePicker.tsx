import { useCallback, useEffect, useMemo, useState } from "react";
import { EDatePickerProps } from "./types";
import { StyledDatePicker } from "./styles";
import dayjs from "dayjs";

export default function EDatePicker({
  value,
  onChange,
  format = "DD/MM/YYYY",
  placeholder: originalPlaceholder,
  ...rest
}: EDatePickerProps) {
  const { label } = rest;

  const [selfValue, setSelfValue] = useState(value);

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

  useEffect(() => {
    setSelfValue(value);
  }, [value]);

  const outputValue = useMemo(() => {
    if (Number(selfValue)) {
      return dayjs.unix(Number(selfValue));
    }
    return undefined;
  }, [selfValue]);

  const updateValue = useCallback(
    (value?: number) => {
      setSelfValue(value);
      onChange && onChange(value);
    },
    [onChange],
  );

  const onChangeDatePicker = useCallback(
    (e: dayjs.Dayjs | null) => {
      if (e) {
        updateValue(Math.floor(e.valueOf()) / 1000);
      } else {
        updateValue(undefined);
      }
    },
    [updateValue],
  );

  return (
    <StyledDatePicker
      value={outputValue}
      onChange={onChangeDatePicker}
      format={format}
      placeholder={placeholder}
      {...rest}
    />
  );
}
