import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import { articleData } from "./data";
const ROOT = document.getElementById("root");
const Index = () => {
  return (
    <main className="main-wrapper">
      <ArticleCard data={articleData} />
    </main>
  );
};

ReactDOM.render(<Index />, ROOT);
