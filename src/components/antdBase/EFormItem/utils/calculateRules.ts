import { EFormItemProps } from "../types";

interface ICalculateRules
  extends Pick<EFormItemProps, "rules" | "required" | "label"> {
  componentName?: string;
}

export const calculateRules = ({
  required,
  rules,
  label,
  componentName = "",
}: ICalculateRules) => {
  const stringLabel = typeof label === "string" ? label : undefined;
  const lowerLabel = stringLabel?.toLowerCase();

  const newRules = rules ? [...rules] : [];

  const modifiedRules = newRules.map((rule) => {
    if (typeof rule !== "function" && lowerLabel) {
      const { message, min, max } = rule;

      // Case min
      if (min && !message) {
        return {
          ...rule,
          message: `min kí tự`,
        };
      }

      // Case max
      if (max && !message) {
        return {
          ...rule,
          message: `max kí tự`,
        };
      }
    }
    return rule;
  });

  // Case required
  const hasRequiredRule = modifiedRules.some(
    (rule) => typeof rule !== "function" && rule.required,
  );

  if (required && lowerLabel) {
    if (!hasRequiredRule) {
      const msgI18 = componentName.match(/select|date/i)
        ? "Vui lòng chọn"
        : "Vui lòng nhập";
      modifiedRules.push({
        required: true,
        message: `${msgI18} ${lowerLabel}!`,
      });
    }
  }

  return modifiedRules;
};
