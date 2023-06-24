const getStringOfRoles = (rolesObj, roleType) => {
  roleType = roleType === "cast" ? "character" : "job";
  const roles = rolesObj.map(
    (role) => `${role[roleType]} (${role.episode_count} Episodes)`
  );
  return roles.join(", ");
};

export default getStringOfRoles;
