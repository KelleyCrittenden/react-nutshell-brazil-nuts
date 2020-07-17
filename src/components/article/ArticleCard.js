import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";

// The job of this component is to display an article card. The code below defines what a single article card should look like.

const ArticleCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Title: "Headline Here"
                </h3>
                <p>Synopsis: "Story here"</p>
                <p>TimeStamp Here</p>
            </div>
        </div>
    )
}

export default ArticleCard;