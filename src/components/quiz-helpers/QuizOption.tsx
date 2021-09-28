import React from "react";
import { Chip } from "@material-ui/core";
import { answerStyles } from "./answerStyles";
import QuizAnswerAvatar from "./QuizAnswerAvatar";
export type AnswerTypes = "unanswered" | "rightanswer" | "wronganswer" | "notselectedright" | "notselectedwrong";

interface QuizOptionProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  index: number;
  state?: AnswerTypes;
}

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  chip: {
    "& div": {
      width: "24px",
      height: "24px",
      marginLeft: "5px",
      marginRight: "-6px",
    },
  },
}));

const QuizOption: React.FC<QuizOptionProps> = ({ text, onClick, state = "unanswered", index }) => {
  const classes = useStyles();
  const answerStyle = answerStyles[state];

  return (
    <Chip
      className={classes.chip}
      variant={answerStyle.chipVariant}
      avatar={<QuizAnswerAvatar state={state} defaultText={"" + index} />}
      label={text}
      onClick={onClick ? onClick : () => console.log(state)}
      style={answerStyle.chipStyle}
    />
  );
};

export default QuizOption;
