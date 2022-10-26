import { useState, useEffect } from "react";
import "./MediaListCard.css";
import DataJson from "../data/data.json";

function MediaListCard() {
  const [jsonData, setJsonData] = useState(DataJson[0].profileDetails);

  useEffect(() => {
    setJsonData(jsonData);
  }, [jsonData]);

  return (
    <>
      {/* Load data from Json file */}

      {jsonData.map((item, index) => {
        return (
          <button key={index} className="link_button" id={item.id}>
            <a href={`${item.link}`} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </button>
        );
      })}
    </>
  );
}

export default MediaListCard;
