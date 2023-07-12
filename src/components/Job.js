import React, { useEffect, useState } from "react";

const Job = ({ data, setKeywords }) => {
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
  } = data;

  const keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

  useEffect(() => {
    const importSvg = async () => {
      const { default: svg } = await import(`${logo}`);
      setIcon(svg);
    };
    importSvg();
  }, [logo]);

  return (
    <div className={`job-container ${featured && "job-container--borderLeft"}`}>
      <div className="logo">
        <img className="icon" src={icon} alt="" />
      </div>
      <div className="part1">
        <div className="new_feature">
          <div className="company">{company}</div>
          {data.new && <span className="new">NEW!</span>}
          {data.featured && <span className="featured">FEATURED</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <ul className="detail">
            <div>
              <span className="agos">{postedAt}</span>
            </div>
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
        {keywords.map((keyword, id) => (
          <button className="btn" onClick={() => setKeywords(keyword)} key={id}>
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
