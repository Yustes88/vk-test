import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupItemComponent from "./GroupItemComponent";
import FilterComponent from "./FilterComponent";
import {
  filterByAvatarColor,
  filterByFriends,
  filterByPrivacy,
  getAvatarColors,
} from "../utils.js/utils";

const GroupComponent = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  let avatarColors = [];

  if (data) {
    avatarColors = getAvatarColors(data);
  }

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get("/db.json");
      setData(response.data.groups);
      setResult(response.data.result);
      setFilteredData(response.data.groups);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (privacy, color, hasFriends) => {
    let filteredGroups = data;

    filteredGroups = filterByPrivacy(filteredGroups, privacy);
    filteredGroups = filterByAvatarColor(filteredGroups, color);

    if (hasFriends) {
      filteredGroups = filterByFriends(filteredGroups);
    }

    setFilteredData(filteredGroups);
  };

  if (!result) {
    return <div>Oopps, something went wrong, please try again later</div>;
  }

  return (
    <div>
      <h1>Groups:</h1>
      <div>
        <FilterComponent onFilter={handleFilter} colors={avatarColors} />
      </div>
      {!filteredData && <div>No groups availavle</div>}
      {filteredData && (
        <ul>
          {filteredData.map((group) => (
            <GroupItemComponent key={group.id} group={group} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupComponent;
