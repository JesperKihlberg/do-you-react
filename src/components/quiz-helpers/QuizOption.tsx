import React from "react";
import { Avatar, Chip } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
export type AnswerTypes = "unanswered" | "rightanswer" | "wronganswer" | "notselectedright" | "notselectedwrong";

interface QuizOptionProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  index: number;
  state?: AnswerTypes;
}

const QuizOption: React.FC<QuizOptionProps> = ({ text, onClick, state = "unanswered", index }) => {
  const answerTypeStyles: {
    [key: string]: {
      chipVariant: "default" | "outlined";
      chipStyle: React.CSSProperties | undefined;
      avatarStyle: React.CSSProperties | undefined;
      avatarContent: JSX.Element | undefined;
    };
  } = {
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
  const answerStyle = answerTypeStyles[state];

  return (
    <Chip
      variant={answerStyle.chipVariant}
      avatar={<Avatar style={answerStyle.avatarStyle}>{answerStyle.avatarContent || index}</Avatar>}
      label={text}
      onClick={onClick ? onClick : () => console.log(state)}
      style={answerStyle.chipStyle}
    />
  );
};

export default QuizOption;
