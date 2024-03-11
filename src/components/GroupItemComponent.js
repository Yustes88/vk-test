import React, { useState } from "react";

const GroupItemComponent = (group) => {
  const [visible, setVisible] = useState(false);

  const displayFriends = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="group-item-container">
        <h1>{group.group.name}</h1>
        <div className="avatar-container">
          <img
            className="avatar-image"
            style={{ border: `solid ${group.group.avatar_color}` }}
            src="/avatar.jpg"
            alt="Avatar"
          ></img>
        </div>
        <div>{group.group.closed ? "Закрытая" : "Открытая"}</div>
        <div>Количество участников: {group.group.members_count}</div>
        <div className="friends-list">
          {"friends" in group.group && (
            <>
              <button onClick={displayFriends} className="button">
                Друзья:
                {group.group.friends.length}
              </button>
              <div style={{ display: `${visible ? "block" : "none"}` }}>
                {group.group.friends.map((friend) => (
                  <div key={friend.first_name}>
                    {friend.first_name}
                    {friend.last_name}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GroupItemComponent;
