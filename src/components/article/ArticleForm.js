import React, { useState } from "react";
import ArticleManager from "../../modules/ArticleManager";
import "./ArticleForm.css";


const ArticleForm = props => {
    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: "",
        timestamp:  new Date().toISOString()
    });
    const [isLoading, setIsLoading] = useState(false);
    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.


    const [showForm, setShowForm] = useState(false);

    // handleFieldChange watches the 
    const handleFieldChange = e => {
        const stateToChange = { ...article };
        stateToChange[e.target.id] = e.target.value;
        setArticle(stateToChange);
    };


    const handleClick = e => {
        setShowForm(!showForm);
    }

    /*  Local method for validation, set loadingStatus, create article object, invoke the ArticleManager post method, and redirect to the full article list */

    // let Timestamp = (props.article.timestamp)
    // let uglyTimestamp = Math.floor(Date.now(Timestamp)/1000);
    // let readableTimestamp = new Date (uglyTimestamp*1000);

    const constructNewArticle = e => {
        e.preventDefault();
        if (article.title === "" || article.synopsis === "" || article.url === "") {
            alert("Please provide input to all fields");
        } else {
            setIsLoading(true);

            // Create the article and redirect user to article list. 
            ArticleManager.post(article)
                // The trick here is to add props to getArticles(). This is made possible by adding an <ArticleForm> tag into the rendered return in the ArticleList component. And then using  getArticles={getArticles}  as a key/value pair.
                .then(() => {
                    props.getArticles()
                    setIsLoading(false)

                });
        }
    };

    return (
        <>
            <div>
                <button type="button"
                    id="showHiddenArticlesButton"
                    onClick={handleClick}
                >
                    Add New Article
                </button>
                <form className={ showForm ? 'show':'hidden'}>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="title"> Title </label>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="title"
                                placeholder="Title"
                            />
                            <label htmlFor="synopsis"> Synopsis </label>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="synopsis"
                                placeholder="Synopsis"
                            />
                            <label htmlFor="url"> Url </label>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="url"
                                placeholder="url" />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                id="saveArticleButton"
                                disabled={isLoading}
                                onClick={constructNewArticle, handleClick}
                            >Save Article</button>
                            <input type="reset" defaultValue="Reset" id="resetButton"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default ArticleForm;