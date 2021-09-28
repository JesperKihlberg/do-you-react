import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import QuizOption, { AnswerTypes } from "./QuizOption";

export interface QuizOption {
  text: string;
  correct: boolean;
}
interface QuizOptionsProps {
  // onOptionSelected: (correct: boolean) => void;
  options: QuizOption[];
  selectedIndex?: number | null;
  setSelectedIndex: (index: number) => void;
}
const QuizOptions: React.FC<QuizOptionsProps> = ({ options, selectedIndex, setSelectedIndex }) => {
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
          <Grid key={index} item xs={12}>
            <Paper elevation={0} style={{ padding: 8 }}>
              <QuizOption
                text={option.text}
                state={optionState}
                index={index + 1}
                onClick={
                  selectedIndex !== null
                    ? () => null
                    : () => {
                        setSelectedIndex(index);
                        // onOptionSelected(option.correct);
                      }
                }
              />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default QuizOptions;
