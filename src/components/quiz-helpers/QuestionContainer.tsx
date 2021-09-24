import { Avatar, Card, CardContent, CardHeader, Collapse, createStyles, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2),
      width: "100%",
      maxWidth: "1200px",
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);
interface QuestionContainerProps {}
const QuestionContainer: React.FC<QuestionContainerProps> = ({ children }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Card className={classes.card}>
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
