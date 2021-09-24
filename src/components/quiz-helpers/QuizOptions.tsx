import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import QuizOption, { AnswerTypes } from "./QuizOption";

interface QuizOptionsProps {
  options: { text: string; correct: boolean }[];
}
const QuizOptions: React.FC<QuizOptionsProps> = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {options.map((option, index) => {
        let optionState: AnswerTypes =
          selectedIndex === null
            ? "unanswered"
            : selectedIndex === index
            ? option.correct
              ? "rightanswer"
              : "wronganswer"
            : option.correct
            ? "notselectedright"
            : "notselectedwrong";

        return (
          <Grid xs={12}>
            <Paper elevation={0} style={{ padding: 8 }}>
              <QuizOption
                text={option.text}
                state={optionState}
                index={index + 1}
                onClick={selectedIndex !== null ? () => null : () => setSelectedIndex(index)}
              />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default QuizOptions;
