import React, { useState, useEffect } from "react";
import ArticleManager from "../../modules/ArticleManager";
import "./ArticleForm.css";



const ArticleForm = props => {
    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.

    const handleFieldChange = e => {
        const stateToChange = { ...article };
        stateToChange[e.target.id] = e.target.value;
        setArticle(stateToChange);
    };

    // timestamp

    // const timestamp = Date.now(); // This would be the timestamp you want to format

    // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));

    // export function currentDateTime(currentDate) {
    //     let generateCurrentDateTime;
    //     //gets current date and time
        
    //     //get current time in user location based on locale date format
    //     let currentTime = new Date(currentDate).toLocaleTimeString(undefined, {
    //         hour: "2-digit",
    //         minute: "2-digit"
    //     })
    
    //     //get today's date
    //     let date = new Date(currentDate).getDate();
    //     //get current month
    //     let month = new Date(currentDate).getMonth();
    //     //get current year
    //     let year = new Date(currentDate).getFullYear();
    
    //     //list of months
    //     const months = [
    //         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    //     ]
        
    //     //this will generate string of the current month, date, year @ and current time in format specified
    //     generateCurrentDateTime = months[month] + " " + date + "," + year + " @ " + currentTime;
        
    //     console.log(generateCurrentDateTime)
    //     return generateCurrentDateTime
    // }


   /*  Local method for validation, set loadingStatus, create article object, invoke the ArticleManager post method, and redirect to the full article list */

//   useEffect(() => {
//       ArticleManager.getAll(props.articles)
//         .then(article => {
//             setArticle ({
//                 title: article.title,
//                 synopsis: article.synopsis,
//                 url: article.url
//             })
//         });
//   }, [props.articles])

    const constructNewArticle = e => {
        e.preventDefault();
        if (article.title === "" || article.synopsis === "" || article.url === "") {
            alert("Please provide input to all fields");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list
            ArticleManager.post(article)
            .then(setArticle);
        }
    };

    return (
        
    <>
      <form>
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
    </>
    ); 
};

export default ArticleForm;