import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import axios from "axios";
import { Button, Dropdown, Form } from "react-bootstrap";

import { QuestionContext } from "./QuestionContext";

const Question = (props) => {
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editAns, setEditAns] = useState("");

  const editHandler = () => {
    setIsEditing(true);
  };

  const cnfrEditHandler = (ques) => {
    console.log(editAns);
    axios({
      method: "patch",
      url: `https://karuna-go.herokuapp.com/questions/${ques._id}`,
      data: {
        q_body: editAns,
      },
    })
      .then(() => {
        setQuesNo(quesNo - 1);
        setIsEditing(false);
      })
      .catch((err) => console.error(err));
  };

  const deleteHandler = (ques) => {
    console.log();
    axios({
      method: "delete",
      url: `https://karuna-go.herokuapp.com/questions/${ques._id}`,
    })
      .then((res) => {
        setQuesNo(quesNo - 1);
      })
      .catch((err) => console.error(err));
  };
  console.log(props.ques, "hey");
  return (
    <div className="d-item d-ques-item" key={props.ques._id}>
      <div className="d-ques">
        <div className="d-user-details">
          <div className="d-user-details-2">
            <div className="d-user-details-icon">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div className="d-user-details-2-name">
              {
                props.ques.writer_name && <div>  {props.ques.writer_name}</div>
              }
              {/* <div>{props.ques.date_created && moment(props.ques.date_created).fromNow()}</div> */}
            </div>
          </div>
          <div className="d-edit-option">
            {props.ques && (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => editHandler(props.ques)}>
                    <i className="fa fa-cog" aria-hidden="true"></i> Edit
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => deleteHandler(props.ques)}>
                    <i className="fa fa-trash" aria-hidden="true"></i> Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )
            }
          </div>
        </div>
        <div className="d-ques-body">
          {isEditing ? (
            <>
              <Form.Control as="textarea" rows="3" defaultValue={props.ques.q_body}
                onChange={(e) => setEditAns(e.target.value)}></Form.Control>
              <br />
              <Button onClick={() => cnfrEditHandler(props.ques)}>
                Confirm Edit
            </Button>
            </>
          ) : (
              <>
                <span>{props.ques.q_body}</span>
              </>
            )}
        </div>
        <div className="d-ques-last-item">
          <div className="d-ques-stats">
            <div className="d-answers">
              <span> <Link
                to={{
                  pathname: `/discussion-forum/${props.ques._id}/answers`,
                  state: props.ques,
                }}
              >  Replies </Link></span>
            </div>
            {/* <div className="d-upvotes">
              <span>13 Upvotes </span>
            </div> */}
          </div>
          {/* <div className="d-ques-vote-icons">
            <div className="d-ques-vote-up">
              <button>
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </button>
            </div>
            <div className="d-ques-vote-down">
              <button>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>

  );
};

export default Question;
