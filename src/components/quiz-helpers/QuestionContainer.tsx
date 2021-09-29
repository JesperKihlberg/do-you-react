import { Button, Card, CardActions, CardContent, CardHeader, Collapse, createStyles, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import QuizAnswerAvatar from "./QuizAnswerAvatar";
import { AnswerTypes } from "./QuizOption";
import clsx from "clsx";
import { answerStyles } from "./answerStyles";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2),
      width: "100%",
      maxWidth: "1200px",
    },
  })
);
interface QuestionContainerProps {
  state: AnswerTypes;
  last: boolean;
  onShowNext: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  subheader: string;
}
const QuestionContainer: React.FC<QuestionContainerProps> = ({ state, last, onShowNext, open, setOpen, children, title, subheader }) => {
  const classes = useStyles();
  const answerStyle = answerStyles[state];

  return (
    <Card className={classes.card} elevation={4}>
      <CardHeader
        style={answerStyle.chipStyle}
        onClick={() => setOpen(!open)}
        avatar={<QuizAnswerAvatar state={state} defaultText={"?"} />}
        title={title}
        subheader={subheader}
      ></CardHeader>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
        <CardActions>
          {last ? (
            <Button variant="contained" color="secondary" onClick={() => setOpen(false)} disabled={state === "unanswered"}>
              Show result
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onShowNext();
              }}
              disabled={state === "unanswered"}
            >
              Show next
            </Button>
          )}
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default QuestionContainer;
