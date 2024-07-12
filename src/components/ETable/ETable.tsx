import { TableProps } from "antd";
import { StyledTable } from "./styles";
import clsx from "clsx";

export default function ETable({
  rowKey = "_id",
  size = "small",
  className,
  ...rest
}: TableProps) {
  return (
    <StyledTable
      className={clsx("e-table shadow-sm", className)}
      rowKey={rowKey}
      size={size}
      {...rest}
    />
  );
}
