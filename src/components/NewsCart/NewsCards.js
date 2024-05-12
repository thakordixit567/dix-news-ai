import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Typography, Grid, Grow } from "@mui/material";
import useStyles from "./styles";

const infoCards = [
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Sports news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, Cricket, Smartphones, Narendra Modi...",
    text: "Give me the information about Smartphones",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, The Times Of India, BBC News, Hindustan Times, News 18, India Today, ABC News,...",
    text: "Give me the news from The Times Of India",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          spacing={3}
         justifyContent="center"
         alignItems="center"
          display="flex"
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    {" "}
                    <strong>{infoCard.title.split(" ")[2]}:</strong> <br />{" "}
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} mb={4} lg={3} style={{ displap: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
