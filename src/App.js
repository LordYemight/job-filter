import data from "./data.json";
import Jobs from './components/Jobs';
import { useState } from 'react';
import Header from './components/Header';
import './App.css'

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeyword = (keyword) => {
    if (!filterKeywords.includes(keyword)) {
      setfilterKeywords([...filterKeywords, keyword]);
    }
  };

  const deleteKeyword = (keyword) => {
    const newKeywords = filterKeywords.filter ((key) => key !== keyword);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  }
console.log(filterKeywords)

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && 
      
      <Header keywords = {filterKeywords} removeKeywords = {deleteKeyword} clearAll = {clearAll} />}

      <Jobs keywords = {filterKeywords} data = {data} setKeywords = {addFilterKeyword}/>
    </div>
  )
}

export default App