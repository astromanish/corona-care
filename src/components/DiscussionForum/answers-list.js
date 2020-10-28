import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Answer from "./answer";

import { AnswerContext } from "./AnswerContext";
import Question from './question';
import AddAnswer from './add-answer';

const AnswerList = (props) => {
  const [ansNo, setAnsNo] = useContext(AnswerContext);
  const question = props.question;
  const [answersList, setAnsList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://karuna-go.herokuapp.com/answers/${question._id}`,
      params: {
        ques_id: question._id,
      },
    })
      .then((res) => {
        console.log(res.data, question._id);
        setAnsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [ansNo]);

  return (
    <>
        <Question ques={question} />
        <AddAnswer question={question} />
        {answersList.length ? (
          <>
            {
              answersList
                .slice(0)
                .reverse()
                .map((ans) => {
                  return (
                    <>
                      <Answer ans={ans} question={question}></Answer>{" "}
                    </>
                  );
                })
            }
            </>
        ) : (
            <div className="d-item no-answer">
              <p>Be first one to reply</p>
            </div>
          )}
    </>
  );
};

export default AnswerList;
