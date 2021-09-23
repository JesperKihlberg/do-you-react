import React from "react";

import Plain1 from "./components/samples/SimpleFunctionalComponent";
import { CopyBlock, dracula } from "react-code-blocks";
import { Avatar, AppBar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import QuestionContainer from "./components/quiz-helpers/QuestionContainer";

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

const simpleFunctionalComponentText = `import React, { useEffect } from "react";

const Plain1: React.FC = () => {
  useEffect(() => {
    return () => console.log("a");
  });
  return <span>Hello</span>;
};

export default Plain1;
`;
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2">Do you even React?</Typography>
        <Plain1 log={(message) => console.log(message)} />
      </div>
      <QuestionContainer code={simpleFunctionalComponentText}>
        <div style={{ fontFamily: "Consolas" }}>
          <CopyBlock
            language={"jsx"}
            text={simpleFunctionalComponentText}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </QuestionContainer>
    </div>
  );
};

export default App;
