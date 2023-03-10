import React,{ useEffect, useState }  from 'react';
import './App.css';
import Note from './Note';
import Top from './Top';
import Quotes from './quotes.png'
import { HeartSpinner } from 'react-spinners-kit'


function App() {
const [data,setData]=useState({})
const fetchData = () => {
  return fetch("https://script.google.com/macros/s/AKfycbyk4DXzWqDfU3u9pr331iM8Z5i-FUZr4N8FqSf91KlwJLu0C90-Q39hkQCLemRdb1MyvA/exec?action=getQuotes")
        .then((response) => response.json())
        .then((data) => setData(data));
}
useEffect(() => {
  fetchData();
},[])
var bgcolor=(!data.color)?"#fff":data.color
var author=(!data.quotes)?"":"-" +data.author
var quotes = (!data.quotes)?<center><HeartSpinner size={80} color="black"/></center>:data.quotes +'✨' 
document.body.style.backgroundColor = bgcolor;
  return (
    <div className="App">
      <Top quotestext={quotes} author={author}/>
    <Note quotestext={quotes} author={author}/>
    <div className="mobilequotes">
      <img src={Quotes} alt='"' />
      <h2>
        {quotes}
      </h2>      
      <div className="author">{author}</div>
    </div>
      
    </div>
  );
}

export default App;
