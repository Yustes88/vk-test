export const filterByPrivacy = (groups, privacy) => {
  if (privacy === "all") return groups;
  return groups.filter((group) =>
    privacy === "closed" ? group.closed : !group.closed
  );
};

export const filterByAvatarColor = (groups, color) => {
  if (!groups) return;
  if (color === "any") return groups;
  return groups.filter((group) => group.avatar_color === color);
};

export const filterByFriends = (groups) => {
  if (!groups) return;
  return groups.filter((group) => group.friends && group.friends.length > 0);
};

export const getAvatarColors = (data) => {
  if (!data) return;
  return [
    ...new Set(
      data
        .filter((group) => "avatar_color" in group)
        .map((group) => group.avatar_color)
    ),
  ];
};
