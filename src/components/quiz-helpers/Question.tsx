import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Browser from "./Browser";
import Code from "./Code";
import QuestionContainer from "./QuestionContainer";
import { AnswerTypes } from "./QuizOption";
import QuizOptions, { QuizOption } from "./QuizOptions";
interface QuestionProps {
  codeRequestInfo: RequestInfo;
  component: React.ComponentType<{ log: (logMessage: string) => void }>;
  questionText: string;
  questionAnswers: QuizOption[];
  answered: AnswerTypes;
  headerTitle: string;
  subheader: string;
  setAnswered: (correct: boolean) => void;
  last: boolean;
  onShowNext: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Question: React.FC<QuestionProps> = ({
  codeRequestInfo,
  component,
  questionText,
  questionAnswers,
  headerTitle,
  subheader,
  answered,
  setAnswered,
  last,
  onShowNext,
  open,
  setOpen,
}) => {
  const Component = React.memo(component);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <QuestionContainer
      state={answered}
      last={last}
      onShowNext={onShowNext}
      open={open}
      setOpen={setOpen}
      title={headerTitle}
      subheader={subheader}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper elevation={0}>
            <Code codeRequestInfo={codeRequestInfo} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container>
            <Grid item xs={12}>
              <Card elevation={3}>
                <CardContent>
                  <Paper elevation={0} style={{ padding: 8 }}>
                    <Typography variant="body2" component="p">
                      {questionText}
                    </Typography>
                    <Typography color="textSecondary" style={{ fontSize: 14 }} gutterBottom>
                      Select an answer:
                    </Typography>
                  </Paper>
                  <QuizOptions
                    selectedIndex={selectedIndex}
                    setSelectedIndex={(index) => {
                      setSelectedIndex(index);
                      setAnswered(questionAnswers[index]?.correct);
                    }}
                    options={questionAnswers}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "8px" }}>
              {answered && answered !== "unanswered" && (
                <Browser logMessages={questionAnswers.find((x) => x.correct)?.text.split(" ")}>
                  <Component log={console.log} />
                </Browser>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </QuestionContainer>
  );
};

export default Question;
