import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateUser = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [status, setstatus] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUser", { title, desc, status })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="form-class">
        <div className="form-heading">
          <h2>Add New Task</h2>
        </div>
        <form onSubmit={Submit} id="form" className="form-data">
          <label for="input-text">Task Title</label>
          <input
            id="input-text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="msg"></div>
          <label for="DD-Date">Status</label>
          <input
            id="DD-Date"
            type="text"
            onChange={(e) => setstatus(e.target.value)}
          />
          <label for="Desc-data">Description</label>
          <textarea
            id="Desc-data"
            rows="10"
            cols="30"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="btns">
            <button id="add" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
