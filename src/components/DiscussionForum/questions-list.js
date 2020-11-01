import React, { useEffect, useState, useContext } from "react";
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';
import axios from "axios";
import Question from "./question";

import { QuestionContext } from "./QuestionContext";

const QuestionList = () => {

  const overHead = css`
  height: 35vh;
  display: block;
  margin: 30vh auto 10vh auto;
  grid-column: 1/4;
`;
  const [loading,setLoading] = useState(false);
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://karuna-go.herokuapp.com/questions",
    })
      .then((res) => {
        console.log(res);
        setQuestionsList(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [quesNo]);
  return (
    <>
      { 
                loading ? (<PuffLoader color="#4A90E2" css={overHead} loading={loading} />) :
                (
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
                                  ) 
      }
    </>
  );
};

export default QuestionList;
