import { Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function EllipsisText({ children, title }: Props) {
  const Ellipsis = styled(Typography)({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  });

  return (
    <Tooltip title={title} arrow={true} followCursor={true} placement="top">
      <Ellipsis>{children}</Ellipsis>
    </Tooltip>
  );
}
