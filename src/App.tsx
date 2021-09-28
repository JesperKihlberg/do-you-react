import React, { useState } from "react";

import SimpleFunctionalComponent from "./components/samples/SimpleFunctionalComponent";
import { Avatar, AppBar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import QuestionContainer from "./components/quiz-helpers/QuestionContainer";
import Code from "./components/quiz-helpers/Code";
import Question from "./components/quiz-helpers/Question";
import { AnswerTypes } from "./components/quiz-helpers/QuizOption";
var simpleFunctionalComponentText = require("../public/samples/simpleFunctionalComponent.txt");

const useStyles = makeStyles(() =>
  createStyles({
    imageIcon: {
      display: "flex",
      height: "inherit",
      width: "inherit",
    },
    iconRoot: {
      textAlign: "center",
    },
    questionContainers: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState<{ [key: number]: { answer: AnswerTypes; open: boolean } }>({
    0: { answer: "unanswered", open: true },
  });
  return (
    <div>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Avatar aria-label="recipe" style={{ backgroundColor: "transparent" }}>
              <img className={classes.imageIcon} src="./images/favicon.svg" />
            </Avatar>
            <Button color="inherit">React component lifecycle quiz</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.questionContainers}>
        <Question
          last
          open={answers[0].open}
          setOpen={(open) => setAnswers({ ...answers, 0: { answer: answers[0].answer, open } })}
          onShowNext={() => null}
          answered={answers[0].answer}
          setAnswered={(correct) => setAnswers({ ...answers, 0: { answer: correct ? "rightanswer" : "wronganswer", open: true } })}
          codeRequestInfo={simpleFunctionalComponentText}
          questionText={"What is logged when the component is mounted?"}
          component={SimpleFunctionalComponent}
          questionAnswers={[
            { text: "a b c", correct: false },
            { text: "a b d c", correct: false },
            { text: "a d c", correct: false },
            { text: "c a d", correct: true },
            { text: "c a b d", correct: false },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
