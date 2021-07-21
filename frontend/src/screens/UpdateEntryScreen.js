import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateEntryScreen = ({ history, match }) => {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const id = match.params.id;

  const getOneEntry = async (id) => {
    const { data } = await axios.get(`/api/getOneEntry/${id}`);
    const { title, textBody, created_at } = data;
    setTitle(title);
    setTextBody(textBody);
  };

  useEffect(() => {
    if (title && textBody && isSubmitted) {
      history.push("/");
      return;
    }
    getOneEntry(id);
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`/api/updateEntry/${id}`, {
        title,
        textBody,
      })
      .then((res) => console.log(res));
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Update Entry Screen</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          placeholder={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="entry title"
          cols="100"
        ></textarea>
        <br></br>
        <textarea
          value={textBody}
          placeholder={textBody}
          onChange={(e) => setTextBody(e.target.value)}
          name="new entry"
          rows="30"
          cols="100"
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default UpdateEntryScreen;
