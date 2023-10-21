import React, {useEffect, useState} from 'react';
import './App.scss';
import colorArray from './colors.array';

let quotelink = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote ] = useState("What´s up and how is your day going so far, if i may ask?")

  const [author, setAuthor ] = useState("Qunie")
 
const [randomNumber, setRandomNumber] = useState(0);

const [quotesArr, setquotesArr] = useState(null);

const [colur, setcolor] = useState("#FF6633");

const fetchQuotes = async (quotelink) =>{
  const response = await fetch(quotelink);
  const parse = await response.json();
  setquotesArr(parse.quotes)
}

useEffect(() => {
  fetchQuotes(quotelink)

}, [quotelink])

const generateRandomNumber = () => {
  let randomNum = Math.floor(quotesArr.length * Math.random()); 
  setRandomNumber(randomNum);

  const selectedColor = colorArray[randomNum];
  setcolor(selectedColor);

  setQuote(quotesArr[randomNum].quote)
  setAuthor(quotesArr[randomNum].author)
}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: colur, color: colur}}>
        <div id="quote-box">

<h1>Random Quotes</h1>
        <p id="text">
       "{quote}"
        </p>
        <p id="author">
         - {author}
        </p>
        <div className='button'>
        <a id="tweet-quote" href={encodeURI("http://twitter.com/intent/tweet?text=${quote}")}>Tweet It</a>
        </div>
        <button id="new-quote" onClick={()=>generateRandomNumber()}>Generate A New Quote</button>
       
        </div>
      </header>
    </div>
  );
}

export default App;
