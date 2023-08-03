import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser/" + id)
      .then((result) => {
        setTitle(result.data.title);
        setDesc(result.data.desc);
        setStatus(result.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateUser/" + id, { title, desc, status })
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
          <h2>Update Task</h2>
        </div>
        <form onSubmit={Update} id="form" className="form-data">
          <label for="input-text">Task Title</label>
          <input
            id="input-text"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="msg"></div>
          <label for="DD-Date">Due Date</label>
          <input
            id="DD-Date"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label for="Desc-data">Description</label>
          <textarea
            id="Desc-data"
            rows="10"
            cols="30"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="btns">
            <button id="add" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
