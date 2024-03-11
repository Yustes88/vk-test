import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupItemComponent from "./GroupItemComponent";

const GroupComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get("/db.json");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data.groups) {
    return <p>No groups</p>;
  }

  return (
    <div>
      <h1>Groups:</h1>
      {data && (
        <ul>
          {data.groups.map((group) => (
            <GroupItemComponent key={group.id} group={group} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupComponent;
