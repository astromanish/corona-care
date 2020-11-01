import React, { useState, useEffect, useContext } from "react";
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';
import axios from "axios";
import Answer from "./answer";

import { AnswerContext } from "./AnswerContext";
import Question from './question';
import AddAnswer from './add-answer';

const AnswerList = (props) => {
  const [loading,setLoading] = useState(false);
  const [ansNo, setAnsNo] = useContext(AnswerContext);
  const question = props.question;
  const [answersList, setAnsList] = useState([]);

  const overHead = css`
  height: 35vh;
  display: block;
  margin: 30vh auto 10vh auto;
  grid-column: 1/4;
`;

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
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
