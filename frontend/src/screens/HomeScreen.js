import React, { useEffect, useState } from "react";
import Entry from "../components/Entry";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";

const HomeScreen = () => {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    const { data } = await axios.get("/api");
    let sortedEntries = data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setEntries(sortedEntries);
  };

  useEffect(getEntries, [entries]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          ></Typography>
        </Grid>
        <Grid item>
          <Link to="/newEntry">
            <Button type="submit" variant="contained" color="inherit">
              {!window.localStorage.getItem("title") ? (
                <PostAddIcon />
              ) : (
                <Typography variant='p' style={{ textDecoration: "none" }}>
                  resume entry
                </Typography>
              )}
            </Button>
          </Link>
        </Grid>
      </Grid>
      {entries.map((entry, i) => (
        <Entry key={i + 100} entry={entry} />
      ))}
    </Container>
  );
};

export default HomeScreen;
