import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (keywords.length > 0) {
      const newData = data.filter((job) => {
        return keywords.every((keyword) => {
          return (
            job.role === keyword ||
            job.level === keyword ||
            job.languages.includes(keyword) ||
            job.tools.includes(keyword)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  }, [data, keywords]);

  return (
    <div className="jobs">
      {filteredData.map((job) => (
        <Job key={job.id} data={job} setKeywords={setKeywords} />
      ))}
    </div>
  );
};

export default Jobs;
