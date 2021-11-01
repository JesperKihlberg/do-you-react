import { AppBar, Avatar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Questions from "./components/quiz-helpers/Questions";
import SimpleFunctionalComponent from "./components/samples/SimpleFunctionalComponent";
import UseStateComponent1 from "./components/samples/UseStateComponent1";
import UseStateComponent2 from "./components/samples/UseStateComponent2";
import UseStateComponent3 from "./components/samples/UseStateComponent3";
import UseStateComponent4 from "./components/samples/UseStateComponent4";
import UseStateComponent5 from "./components/samples/UseStateComponent5";
import UseStateComponent6 from "./components/samples/UseStateComponent6";
import UseStateComponent7 from "./components/samples/UseStateComponent7";

var SimpleFunctionalComponentText = require("../public/samples/SimpleFunctionalComponent.txt");
var UseStateComponentComponentText1 = require("../public/samples/UseStateComponent1.txt");
var UseStateComponentComponentText2 = require("../public/samples/UseStateComponent2.txt");
var UseStateComponentComponentText3 = require("../public/samples/UseStateComponent3.txt");
var UseStateComponentComponentText4 = require("../public/samples/UseStateComponent4.txt");
var UseStateComponentComponentText5 = require("../public/samples/UseStateComponent5.txt");
var UseStateComponentComponentText6 = require("../public/samples/UseStateComponent6.txt");
var UseStateComponentComponentText7 = require("../public/samples/UseStateComponent7.txt");

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
              <img className={classes.imageIcon} src="./favicon.svg" />
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
              subheader: "useState/useEffect - on load",
              codeRequestInfo: UseStateComponentComponentText1,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent1,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a b", correct: true },
                { text: "b a b a", correct: false },
              ],
            },
            {
              subheader: "useState/useEffect - recurring - no guard",
              codeRequestInfo: UseStateComponentComponentText6,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent6,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: false },
                { text: "b a b a b a b a b a b a b a .. (Infinite loop)", correct: true },
              ],
            },
            {
              subheader: "useState/useEffect - recurring - with guard",
              codeRequestInfo: UseStateComponentComponentText2,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent2,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: true },
              ],
            },
            {
              subheader: "useState/useEffect - state not changing",
              codeRequestInfo: UseStateComponentComponentText3,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent3,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a", correct: true },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: false },
              ],
            },
            {
              subheader: "useState/useEffect - set value to same",
              codeRequestInfo: UseStateComponentComponentText4,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent4,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a", correct: true },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: false },
              ],
            },
            {
              subheader: "useState/useEffect - object - set value to new object",
              codeRequestInfo: UseStateComponentComponentText5,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent5,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a", correct: false },
                { text: "b a b", correct: false },
                { text: "b a b a", correct: false },
                { text: "b a b a b a b a b a b a b a .. (Infinite loop)", correct: true },
              ],
            },
            {
              subheader: "useState/useEffect - object - guard",
              codeRequestInfo: UseStateComponentComponentText7,
              questionText: "What is logged when the component is mounted?",
              component: UseStateComponent7,
              questionAnswers: [
                { text: "b", correct: false },
                { text: "a b", correct: false },
                { text: "b a", correct: false },
                { text: "b a b", correct: true },
                { text: "b a b a", correct: false },
                { text: "b a b a b a b a b a b a b a .. (Infinite loop)", correct: false },
              ],
            },
          ]}
        />
      </div>
      {/* <UseStateComponent4 /> */}
    </div>
  );
};

export default App;
