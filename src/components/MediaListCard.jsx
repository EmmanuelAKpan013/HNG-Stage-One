import { useState, useEffect } from "react";
import "./MediaListCard.css";
import DataJson from "../data/data.json";

function MediaListCard() {
  const [jsonData, setJsonData] = useState(DataJson);

  useEffect(() => {
    setJsonData(jsonData);
  }, [jsonData]);

  return <div>{}</div>;
}

export default MediaListCard;
