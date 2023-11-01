import React from "react";
import close from "./images/icon-remove.svg"
import '../css/header.css'
const Header = ({ keywords,removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul className="tabs">
        {keywords.map((key, id) => {
          return (
          <li className="line" key={id}>
            {key}
            <button className="close" onClick={() => removeKeywords (key)}>
              <img src={close} alt="" />
            </button>
          </li> 
          )
        })}
        <a href="/" onClick={() => clearAll()}>
          Clear
        </a>
        
      </ul>
    </div>
  )
} 

export default Header;