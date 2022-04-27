import './App.scss';
import React, { useEffect, useState } from 'react';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
        console.log(data);
      });
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="header">Random Quote Machine</p>
        <div id="quote-area">
          <p id="text">"{quoteInfo.text}"</p>
          <p id="author">- {quoteInfo.author}</p>
        </div>
        <div id="buttons">
          <button id="new-quote" onClick={getQuote}>
            New Quote
          </button>
          <a
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
              quoteInfo.text
            }
            id="tweet-quote"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
