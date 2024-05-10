import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Typography, Grid, Grow } from "@mui/material";
import useStyles from './styles';

const NewsCards = ({ articles }) => {

  const classes = useStyles();

  return (
    <Grow in>
       <Grid className={classes.container} container alignItems='stretch' spacing={3}
       >
       { articles.map((article, i) => (
         <Grid item xs={12} sm={6}
         mb={4} lg={3}
         style={{ displap: 'flex'}}
         >
         <NewsCard article={article} i={i} />
         </Grid>
      ))}
       </Grid>
     
    </Grow>
  );
};

export default NewsCards;
