import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Question from "./question";

import { QuestionContext } from "./QuestionContext";

const QuestionList = () => {
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://karuna-go.herokuapp.com/questions",
    })
      .then((res) => {
        console.log(res);
        setQuestionsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [quesNo]);
  return (
    <>
      {questionsList.length ? (
        questionsList
          .slice(0)
          .reverse()
          .map((ques) => {
            return (
              <>
                    <Question ques={ques} />
              </>
            );
          })
      ) : (
          <div className="d-item no-question">
            <p>Be first one to ask question/add experience here</p>
          </div>
        )}
    </>
  );
};

export default QuestionList;
