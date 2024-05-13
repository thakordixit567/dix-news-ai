import React, { useState, useLayoutEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCart/NewsCards";
import "./index.css";
import { convertWordToNumber } from "word-to-number";
import Logo from './logo/logo-main.png';

const alanKey =
  "dc151d90327cd912a51c712f405db05b2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useLayoutEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newsHeadlines") {
          //alert("This code is executed");
          // console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          //console.log(number)
          const parsedNumber =
            number.length > 2
              ? convertWordToNumber(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening....");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <img src={Logo} alt=""  />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
