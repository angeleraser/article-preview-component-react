import React, { useState } from "react";
import "../../css/ArticleCard.css";
import { socialNetworkIcons } from "../../data";
import ShareButton from "./ShareButton";
const ArticleCard = ({
  data: {
    title,
    imageUrl,
    description,
    user: { name, image, date },
  },
}) => {
  const links = socialNetworkIcons.map(({ name, icon }, key) => (
    <li key={key}>
      {""}
      <a href={`https://${name}.com`} target="_blank" rel="noopener noreferrer">
        {" "}
        {icon}
      </a>
    </li>
  ));
  const [isExpanded, setClassName] = useState(false);
  return (
    <article className="article-card">
      {/* Image  */}
      <img src={imageUrl} alt="article" />
      {/* Content  */}
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <div className="profile-wrapper">
        <div className="user-data">
          <img src={image} alt="user" />
          <h2>{name}</h2>
          <p>{date}</p>
        </div>
        <ShareButton callback={setClassName} />
      </div>
      <div className={`social-links ${isExpanded ? "expanded" : ""}`}>
        <h2>SHARE</h2>
        <ul>{links}</ul>
      </div>
    </article>
  );
};

export default ArticleCard;
