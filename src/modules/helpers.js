
     // toggle hidden content form
        // const [visible, setVisible] = useState(false);
        // const onClick = () => setVisible(true)


    // code for adding a timestamp 
        // const timeDate = new Date(this.props.timeDate);
        // const readableTimeDate = timeDate.toDateString();   


    /* <button type="submit"
            id="showHiddenArticlesButton"
            // onClick={onClick}
        >
            Add New Article
    </button> */



    const getArticles = () => {
        ArticleManager.getAll()
            .then(articlesFromAPI => {
                setArticle(articlesFromAPI);
            });
    }

    useEffect(() => {
        getArticles();
    }, []);