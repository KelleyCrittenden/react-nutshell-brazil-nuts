import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard"
import ArticleManager from "../../modules/ArticleManager"
import ArticleForm from "./ArticleForm";


// This component will initiate the ArticleManager getAll() call, hold on to the returned data, and then render the <ArticleCard /> component for each article.

const ArticleList = (props) => {
    // The initial state is an empty array
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        
        ArticleManager.getAll()
        .then(articlesFromAPI => {
            setArticles(articlesFromAPI);
        }); 
    }
    
    const deleteArticle = id => {
        ArticleManager.delete(id)
        .then(() => ArticleManager.getAll()
        .then(setArticles));
    }

    useEffect(() => {
        getArticles();
    }, []);

    // Use map() to "loop over" the articles array to show a list of article cards
    return (

        <>  
            {/* Add the <ArticleForm> tag here in the rendered return in the ArticleList component. And then use  getArticles={getArticles}  as a key/value pair. *Do not call the function here*   */}
            <ArticleForm
                getArticles={getArticles}
                />
            <div className="container-cards">
                {articles.map(article =>
                    <ArticleCard
                        key={article.id}
                        article={article}
                        deleteArticle={deleteArticle}
                        { ...props }
                    />    
                )}
            </div>
        </>
    );
}

export default ArticleList;