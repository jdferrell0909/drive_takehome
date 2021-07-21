import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  TextField,
  FormGroup,
  FormLabel,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Clock from "react-live-clock";
import moment from "moment";

const NewEntryScreen = ({ history }) => {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // check if form is submitted, if so redirect home
  useEffect(() => {
    if (title && textBody && isSubmitted) {
      history.push("/");
    }
    if (window.localStorage.getItem('title')) {
      setTitle(window.localStorage.getItem('title'));
    }
    if (window.localStorage.getItem('textBody')) {
      setTextBody(window.localStorage.getItem('textBody'));
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/newEntry", {
      title,
      textBody,
    });
    setIsSubmitted(true);
    window.localStorage.removeItem('title');
    window.localStorage.removeItem('textBody');
  };

  return (
    <div style={{ margin: "26px" }}>
      <div style={{ display: "flex" }}>
        <Typography
          variant="h5"
          style={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          <em>New Entry on: </em>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: "10px" }}>
          {moment().format("MMM Do YYYY")}@
          <Clock
            style={{ marginLeft: "4px" }}
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"US/pacific"}
          />
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          placeholder="Entry title..."
          onChange={(e) => {
            window.localStorage.setItem('title', e.target.value);
            setTitle(e.target.value);
          }}
          name="entry title"
          cols="100"
          style={{ marginBottom: "10px", borderRadius: "6px" }}
        ></textarea>
        <br></br>
        <textarea
          value={textBody}
          placeholder="What's on your mind...?"
          onChange={(e) => {
            window.localStorage.setItem('textBody', e.target.value);
            setTextBody(e.target.value);
          }}
          name="new entry"
          rows="30"
          cols="100"
          style={{ marginBottom: "10px", borderRadius: "6px" }}
        ></textarea>
        <br></br>
        <Button variant="contained" color="primary" type="submit">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default NewEntryScreen;
