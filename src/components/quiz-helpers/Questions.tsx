import React, { useState } from "react";
import Question from "./Question";
import { AnswerTypes } from "./QuizOption";
import { QuizOption } from "./QuizOptions";

interface QuestionData {
  subheader: string;
  codeRequestInfo: RequestInfo;
  component: React.ComponentType<{ log: (logMessage: string) => void }>;
  questionText: string;
  questionAnswers: QuizOption[];
}
interface QuestionsProps {
  questions: QuestionData[];
}
const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const length = questions.length;

  const [answers, setAnswers] = useState<{ answer: AnswerTypes; open: boolean }[]>(
    questions.map((_, index) => ({ answer: "unanswered", open: index === 0 }))
  );

  return (
    <>
      {questions.map((question, index) => (
        <Question
          headerTitle={"Question " + (index + 1)}
          key={index}
          last={index > length - 2}
          open={answers[index].open}
          setOpen={(open) => setAnswers({ ...answers, [index]: { answer: answers[index].answer, open } })}
          onShowNext={() =>
            index < length - 1 &&
            setAnswers({
              ...answers,
              ...{
                [index]: { answer: answers[index].answer, open: false },
                [index + 1]: { answer: answers[index + 1].answer, open: true },
              },
            })
          }
          answered={answers[index].answer}
          setAnswered={(correct) => setAnswers({ ...answers, [index]: { answer: correct ? "rightanswer" : "wronganswer", open: true } })}
          {...question}
        />
      ))}
    </>
  );
};
export default Questions;
