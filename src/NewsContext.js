import React, { useState, useEffect} from 'react';                      // axios to fetch api data in JSON format
import axios from 'axios';

// create a Context to apply global settings easily to deep child components
const NewsContext = React.createContext(); 

const NewsContextProvider = props => {
    const myApiKey = 'bd9243e5463046ab80b2e2916b76c33e';
    const [newsData, setNewsData] = useState([]);
    
    // get data from API through axios 
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${myApiKey}`)
        .then( response => {
            // handle success 
            console.log('success');
            setNewsData(response.data);
        })
        .catch( error => {
            // handle error 
            console.log('error');
            console.log(error);
        })
        .then( () => {
            // always executed 
            console.log('API GET completed');
        });
    },[]);

    return(
        // A corresponding Provider to the Context
        // Provides the information from the Context to a consuming component
        <NewsContext.Provider value={newsData}>
            {props.children}
        </NewsContext.Provider>
    );
}

export default NewsContextProvider;