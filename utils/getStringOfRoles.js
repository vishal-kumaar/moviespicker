const getStringOfRoles = (rolesObj, roleType) => {
  if (!rolesObj) {
    return null;
  }
  
  roleType = roleType === "cast" ? "character" : "job";
  const roles = rolesObj.map(
    (role) => `${role[roleType]} (${role.episode_count} Episodes)`
  );
  return roles.join(", ");
};

export default getStringOfRoles;
