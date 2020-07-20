import React, { useState, useEffect } from "react";
import ArticleManager from "../../modules/ArticleManager";
import "./ArticleForm.css";




const ArticleForm = props => {
    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: "",
        timestamp: new Date().toISOString()
    });
    const [isLoading, setIsLoading] = useState(false);
    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.

    const handleFieldChange = e => {
        const stateToChange = { ...article };
        stateToChange[e.target.id] = e.target.value;
        setArticle(stateToChange);
    };

    // toggle hidden content form
        // const [visible, setVisible] = useState(false);
        // const onClick = () => setVisible(true)


        // const getArticles = () => {
        //     ArticleManager.getAll()
        //         .then(articlesFromAPI => {
        //             setArticle(articlesFromAPI);
        //         });
        // }

        // useEffect(() => {
        //     getArticles();
        // }, []);

        /*  Local method for validation, set loadingStatus, create article object, invoke the ArticleManager post method, and redirect to the full article list */

        const constructNewArticle = e => {
            e.preventDefault();
            if (article.title === "" || article.synopsis === "" || article.url === "") {
                alert("Please provide input to all fields");
            } else {
                setIsLoading(true);
                // code for adding a timestamp 
                // const timeDate = new Date(this.props.timeDate);
                // const readableTimeDate = timeDate.toDateString();

                // Create the article and redirect user to article list
                ArticleManager.post(article)
                    .then(setArticle);
            }
        };

        return (

            <>
                <div>
                    {/* <button type="submit"
                        id="showHiddenArticlesButton"
                        // onClick={onClick}
                    >
                        Add New Article
                </button> */}
                    <form className="showContent">
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
                            </div>
                        </fieldset>
                    </form>
                </div>
            </>
        );
};


export default ArticleForm;