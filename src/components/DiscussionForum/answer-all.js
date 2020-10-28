import React from "react";
import AddAnswer from "./add-answer";
import AnswerList from "./answers-list";

const AnswerAll = (props) => {
  return (
    <>
        <AnswerList question={props.location.state} />
    </>
  );
};

export default AnswerAll;
