import React, { useState } from "react";
// import ArticleManager from "../../modules/ArticleManager";
import "./ArticleForm.css";


const ArticleForm = () => {
    const [article, setArticle] = useState({
        "title": "",
        "synopsis": "",
        "url": "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...article };
        stateToChange[e.target.id] = e.target.value;
        setArticle(stateToChange);
    };

   /*  Local method for validation, set loadingStatus, create article object, invoke the ArticleManager post method, and redirect to the full article list */

    const constructNewArticle = e => {
        e.preventDefault();
        if (article.title === "" || article.synopsis === "" || article.url === "") {
            alert("Please provide input to all fields");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list

        }
    };

    return (
        
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Title:"
            />
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="synopsis"
              placeholder="Synopsis"
            />
            <label htmlFor="synopsis">Synopsis:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="url" />
            <label htmlFor="url">Url:</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewArticle}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
    ); 
};

export default ArticleForm;