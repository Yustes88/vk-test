export const filterByPrivacy = (groups, privacy) => {
  if (privacy === "all") return groups;
  return groups.filter((group) =>
    privacy === "closed" ? group.closed : !group.closed
  );
};

export const filterByAvatarColor = (groups, color) => {
  if (color === "any") return groups;
  return groups.filter((group) => group.avatar_color === color);
};

export const filterByFriends = (groups) => {
  return groups.filter((group) => group.friends && group.friends.length > 0);
};

export const getAvatarColors = (data) => {
  return [
    ...new Set(
      data.map((group) => ("avatar_color" in group ? group.avatar_color : ""))
    ),
  ];
};
