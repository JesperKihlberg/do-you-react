import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Code from "./Code";
import QuizOptions from "./QuizOptions";

interface QuestionProps {
  codeRequestInfo: RequestInfo;
  component: JSX.Element;
  questionText: string;
  questionAnswers: string[];
}
const Question: React.FC<QuestionProps> = ({ codeRequestInfo, component, questionText, questionAnswers }) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={8}>
        <Paper elevation={0} style={{ paddingBottom: 8, margin: 8 }}>
          <Code codeRequestInfo={codeRequestInfo} />
        </Paper>
      </Grid>
      <Grid xs={12} md={4} style={{ paddingBottom: 24 }}>
        <Paper elevation={0} style={{ paddingLeft: 16, margin: 8, marginBottom: 16, height: "100%" }}>
          <Grid container>
            <Grid xs={12}>
              <Paper elevation={0} style={{ padding: 8 }}>
                <Typography variant="body2">{questionText}</Typography>
              </Paper>
            </Grid>
            <QuizOptions
              options={[
                { text: "text 1", correct: true },
                { text: "text 2", correct: false },
                { text: "text 3", correct: false },
                { text: "text 4", correct: false },
                { text: "text 5", correct: false },
              ]}
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Question;
