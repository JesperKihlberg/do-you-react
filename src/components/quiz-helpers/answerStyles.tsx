import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

interface answerStyleType {
  [key: string]: {
    chipVariant: "default" | "outlined";
    chipStyle: React.CSSProperties | undefined;
    avatarStyle: React.CSSProperties | undefined;
    avatarContent: JSX.Element | undefined;
  };
}
export const answerStyles: answerStyleType = {
  unanswered: {
    chipVariant: "outlined",
    chipStyle: undefined,
    avatarStyle: undefined,
    avatarContent: undefined,
  },
  rightanswer: {
    chipVariant: "default",
    chipStyle: { backgroundColor: "#4caf50", color: "black" },
    avatarStyle: { color: "#357a38", backgroundColor: "white" },
    avatarContent: <CheckCircleIcon />,
  },
  wronganswer: {
    chipVariant: "default",
    chipStyle: { backgroundColor: "#f44336", color: "white" },
    avatarStyle: { color: "#aa2e25", backgroundColor: "white" },
    avatarContent: <CancelIcon />,
  },
  notselectedright: { chipVariant: "default", chipStyle: {}, avatarStyle: {}, avatarContent: <CheckCircleIcon /> },
  notselectedwrong: { chipVariant: "default", chipStyle: {}, avatarStyle: {}, avatarContent: <CancelIcon /> },
};
