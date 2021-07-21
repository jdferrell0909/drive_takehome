import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, Container, Grid } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Entry = (props) => {
  const { title, textBody, _id, created_at } = props.entry;

  const handleDelete = async (e) => {
    if (window.confirm("Are you sure?")) {
      const { data } = await axios.delete(`/api/delete/${_id}`);
    }
  };

  return (
    <Container
      maxWidth="md"
      style={{
        border: "4px solid black",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      <Grid
        container
        space={2}
        justifyContent="space-between"
        style={{
          padding: "10px 2px 10px 2px",
          border: "1px solid black",
          margin: "10px 0px 10px 0px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4" color="textPrimary" align="left">
          {title}
        </Typography>
        <Typography variant="h6">{created_at.substring(0, 10)}</Typography>
      </Grid>
      <Typography variant="body2" align="left" color="textSecondary" paragraph>
        {textBody}
      </Typography>
      <Grid
        container
        space={2}
        justifyContent="left"
        style={{ padding: "10px" }}
      >
        <Grid item>
          <Link to={`/updateEntry/${_id}`} style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ marginRight: "6px" }}
            >
              Edit
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            type="delete"
            onClick={handleDelete}
          >
            <DeleteForeverIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Entry;
