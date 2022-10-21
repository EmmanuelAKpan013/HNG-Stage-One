import { useState, useEffect } from "react";
import "./MediaListCard.css";
import DataJson from "../data/data.json";

function MediaListCard() {
  const [jsonData, setJsonData] = useState(DataJson[0].profileDetails);
  console.log(jsonData);

  useEffect(() => {
    setJsonData(jsonData);
  }, [jsonData]);

  return (
    <>
      {jsonData.map((item, index) => {
        return (
          <button key={index} className="link_button" id={item.id}>
            {item.name}
          </button>
        );
      })}
    </>
  );
}

export default MediaListCard;
