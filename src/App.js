import React, { useState ,useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCart/NewsCards";
import './index.css';

const alanKey =
  "7e3af44a1f16872bf0496f9885d5847a2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {

   const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          //alert("This code is executed");
         // console.log(articles);
         setNewsArticles(articles)
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
