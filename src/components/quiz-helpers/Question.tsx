import { Card, CardContent, CardHeader, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { BorderClearRounded } from "@material-ui/icons";
import React, { useState } from "react";
import Code from "./Code";
import QuizOptions, { QuizOption } from "./QuizOptions";

interface QuestionProps {
  codeRequestInfo: RequestInfo;
  component: JSX.Element;
  questionText: string;
  questionAnswers: QuizOption[];
}
const Question: React.FC<QuestionProps> = ({ codeRequestInfo, component, questionText, questionAnswers }) => {
  const [answered, setAnswered] = useState(false);
  console.log("answered", answered);
  const logOutput = "c\na\nd";
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper elevation={0}>
          <Code codeRequestInfo={codeRequestInfo} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={0}>
          <Grid container>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Paper elevation={0} style={{ padding: 8 }}>
                    <Typography variant="body2" component="p">
                      {questionText}
                    </Typography>
                    <Typography color="textSecondary" style={{ fontSize: 14 }} gutterBottom>
                      Select an answer:
                    </Typography>
                  </Paper>
                  <QuizOptions onOptionSelected={() => setAnswered(true)} options={questionAnswers} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {answered && (
                <Card>
                  <CardHeader title="Result"></CardHeader>
                  <CardContent>
                    <Paper style={{ padding: 8 }} elevation={0}>
                      {component}
                    </Paper>

                    <TextField
                      id="filled-multiline-flexible"
                      label="Console"
                      multiline
                      fullWidth
                      maxRows={4}
                      value={logOutput}
                      disabled
                      variant="outlined"
                    />
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Question;
