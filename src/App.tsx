import React from "react";

import SimpleFunctionalComponent from "./components/samples/SimpleFunctionalComponent";
import { Avatar, AppBar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import QuestionContainer from "./components/quiz-helpers/QuestionContainer";
import Code from "./components/quiz-helpers/Code";
import Question from "./components/quiz-helpers/Question";
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
        <QuestionContainer>
          <Question
            codeRequestInfo={simpleFunctionalComponentText}
            questionText={"What is logged when the component is mounted?"}
            component={<SimpleFunctionalComponent log={(message) => console.log(message)} />}
            questionAnswers={[
              { text: "a b c", correct: false },
              { text: "c a b", correct: false },
              { text: "c a d", correct: true },
            ]}
          />
        </QuestionContainer>
      </div>
    </div>
  );
};

export default App;
