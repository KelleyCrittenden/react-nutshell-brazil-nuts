import React from "react";
import "./Article.css";
// import { Link } from "react-router-dom";

// The job of this component is to display an article card. The code below defines what a single article card should look like.

const ArticleCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h3>
                        <span className="card-articleTitle">{(props.article.title)}
                        </span>
                    </h3>
                    <p>
                        {(props.article.timestamp)}
                    </p>
                    <p>
                        {(props.article.synopsis)}
                    </p>
                    <p>
                        Url: {(props.article.url)}
                    </p>
                    
                    <button 
                        className="delete" 
                        type="button"
                        onClick={() => props.deleteArticle(props.article.id)}
                        >Remove
                    </button>
                </div>
            </div>
        </>
    )
}

export default ArticleCard;