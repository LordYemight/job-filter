import React, { useEffect, useState } from "react";

const Job = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools
  } = props.data;

  let keywords = [role, level, ...languages,...tools]

  const [icon, setIcon] = useState("");
  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      console.log(d)
      setIcon(d.default);
    })
  }

  useEffect (() =>{
    importSvgs();
  }, [logo, importSvgs])


  return (
    <div className={featured ? "job-container job-container--borderLeft" : "job-container"}>
      <div className="logo">
        <img src={icon} alt=""/>
      </div>
      <div className="part1">
        <div className="new_feature">
          <div className="company">{company}</div>
          {props.data.new && <span className="new">NEW!</span>}
          {props.data.featured && <span className="featured">FEATURED</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
         <ul className="detail">
     
          <span className="ago">{postedAt}</span>
      
          <li>
          <span className="ago">{contract}</span>
          </li>
          <li>
          <span className="ago">{location}</span>
          </li>
         </ul>
        </div>
      </div>
      <div className="part2">
        {keywords.map((key, id) => (
          <button className="btn" onClick={() => props.setKeywords(key)} key={id}>
            {key}
          </button>
          ))
        }

      </div>
    </div>
  )
} 

export default Job;