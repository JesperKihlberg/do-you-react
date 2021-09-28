import React from "react";
import { Avatar } from "@material-ui/core";
import { answerStyles } from "./answerStyles";
import { AnswerTypes } from "./QuizOption";

interface QuizAnswerAvatarProps {
  state: AnswerTypes;
  defaultText: string;
}
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    "& .MuiSvgIcon-root": {
      width: "100%",
      height: "100%",
    },
  },
}));

const QuizAnswerAvatar: React.FC<QuizAnswerAvatarProps> = ({ state, defaultText }) => {
  const answerStyle = answerStyles[state];
  const classes = useStyles();

  return (
    <Avatar className={classes.avatar} style={answerStyle.avatarStyle}>
      {answerStyle.avatarContent || defaultText}
    </Avatar>
  );
};

export default QuizAnswerAvatar;
