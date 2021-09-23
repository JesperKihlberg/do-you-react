import { Avatar, Card, CardContent, CardHeader, Collapse, createStyles, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      backgroundColor: grey[500],
    },
  })
);
interface QuestionContainerProps {
  code: string;
}
const QuestionContainer: React.FC<QuestionContainerProps> = ({ code, children }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Card>
      <CardHeader
        onClick={() => setCollapsed(!collapsed)}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            ?
          </Avatar>
        }
        title="Question 1"
        subheader="Basic component lifecycle"
      ></CardHeader>
      <Collapse in={collapsed} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

export default QuestionContainer;
