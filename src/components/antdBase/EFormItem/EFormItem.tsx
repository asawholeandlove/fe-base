import React, { useMemo } from "react";
import { EFormItemProps } from "./types";
import { calculateRules } from "./utils/calculateRules";
import { StyledFormItem } from "./styles";

export default function EFormItem({
  label,
  children,
  rules,
  layout = "vertical",
  ...rest
}: EFormItemProps) {
  const { required } = rest;

  const childrenName = (children as any)?.type?.displayName as
    | string
    | undefined;

  const modifiedRules = useMemo(() => {
    return calculateRules({
      required,
      rules,
      label,
      componentName: childrenName,
    });
  }, [label, required, rules, childrenName]);

  const isRequireMark = useMemo(() => {
    return !!modifiedRules?.find((rule) => {
      if (typeof rule === "function") return false;
      const { required } = rule;
      return !!required;
    });
  }, [modifiedRules]);

  return (
    <StyledFormItem
      layout={layout}
      rules={modifiedRules}
      label={label}
      {...rest}
    >
      {React.isValidElement(children) &&
        React.cloneElement(children, { label, required: isRequireMark } as any)}
    </StyledFormItem>
  );
}
