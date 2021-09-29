import React from "react";

import { Avatar, AppBar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import Questions from "./components/quiz-helpers/Questions";
import SimpleFunctionalComponent from "./components/samples/SimpleFunctionalComponent";
var SimpleFunctionalComponentText = require("../public/samples/SimpleFunctionalComponent.txt");
import UseStateComponent from "./components/samples/UseStateComponent";
var UseStateComponentComponentText = require("../public/samples/UseStateComponent.txt");

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
      flexDirection: "column",
      alignItems: "center",
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
        <Questions
          questions={[
            {
              subheader: "Basic component lifecycle",
              codeRequestInfo: SimpleFunctionalComponentText,
              questionText: "What is logged when the component is mounted?",
              component: SimpleFunctionalComponent,
              questionAnswers: [
                { text: "a b c", correct: false },
                { text: "a b d c", correct: false },
                { text: "a d c", correct: false },
                { text: "c a d", correct: true },
                { text: "c a b d", correct: false },
              ],
            },
            {
              subheader: "useState",
              codeRequestInfo: UseStateComponentComponentText,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: true },
              ],
            },
            // {
            //   subheader: "Basic component lifecycle",
            //   codeRequestInfo: simpleFunctionalComponentText,
            //   questionText: "What is logged when the component is mounted?",
            //   component: SimpleFunctionalComponent,
            //   questionAnswers: [
            //     { text: "a b c", correct: false },
            //     { text: "a b d c", correct: false },
            //     { text: "a d c", correct: false },
            //     { text: "c a d", correct: true },
            //     { text: "c a b d", correct: false },
            //   ],
            // },
            // {
            //   subheader: "Basic component lifecycle",
            //   codeRequestInfo: simpleFunctionalComponentText,
            //   questionText: "What is logged when the component is mounted?",
            //   component: SimpleFunctionalComponent,
            //   questionAnswers: [
            //     { text: "a b c", correct: false },
            //     { text: "a b d c", correct: false },
            //     { text: "a d c", correct: false },
            //     { text: "c a d", correct: true },
            //     { text: "c a b d", correct: false },
            //   ],
            // },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
