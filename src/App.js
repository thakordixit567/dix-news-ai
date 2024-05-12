import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCart/NewsCards";
import "./index.css";

const alanKey =
  "e0b52108fe558808dcb87398b71c79ce2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          //alert("This code is executed");
          // console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
