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
          <a
            href={`${item.link}`}
            target="_blank"
            rel="noreferrer"
            id={item.id}
            className="link_button"
            key={index}
          >
            {item.name}
          </a>
        );
      })}
    </>
  );
}

export default MediaListCard;
