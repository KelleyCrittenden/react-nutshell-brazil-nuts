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


    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.
    const [isLoading, setIsLoading] = useState(false);

    // This is setting the state of showForm to "false". Because we want to hide the form when the page loads. And then reveal it when the user clicks the button. It works in combination with handleClick (found a few lines down)
    const [showForm, setShowForm] = useState(false);

    // ** handleFieldChange watches the input fields for any change and triggers the useState to re-render. You will need to set this function inside the tag (in the rendered return) of each input you wish to monitor. It is added with this: 
    // onChange={handleFieldChange}
    const handleFieldChange = e => {
        const stateToChange = { ...article };
        stateToChange[e.target.id] = e.target.value;
        setArticle(stateToChange);
    };

    // ** handleClick is triggered by a click event. It creates a show/hide toggle feature that shows/hides an elment. To create this functionality you need to place this: className={ showForm ? 'show':'hidden'}  inside the tag of the element you wish to toggle. Then add a css selector class of  ".hidden" and set the display property to "display: none".
    const handleClick = e => {
        setShowForm(!showForm);
    };

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
                                onClick={constructNewArticle}
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