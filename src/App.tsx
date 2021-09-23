import React, { useEffect, useState } from "react";

import Plain1 from "./components/samples/SimpleFunctionalComponent";
import { CopyBlock, dracula } from "react-code-blocks";
import { Avatar, AppBar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import QuestionContainer from "./components/quiz-helpers/QuestionContainer";
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
  })
);

const App: React.FC = () => {
  const [state, setState] = useState<{ componentText?: string | null }>({ componentText: null });
  useEffect(() => {
    setState({ componentText: null });
    fetch(simpleFunctionalComponentText)
      .then((r) => r.text())
      .then((text) => {
        setState({ componentText: text });
        console.log(text);
      });
  }, [setState]);

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
        <Plain1 log={(message) => console.log(message)} />
      </div>
      {state.componentText && (
        <QuestionContainer code={state.componentText}>
          <div style={{ fontFamily: "Consolas" }}>
            <CopyBlock language={"jsx"} text={state.componentText} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
          </div>
        </QuestionContainer>
      )}
    </div>
  );
};

export default App;
