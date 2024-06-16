const deleteUser = async (id) => {
  console.log(id);
  return $fetch("/api/user", {
    method: "DELETE",
    params: {
      id
    }
  });
};
const updateUser = async (data) => {
  return $fetch("/api/user", { method: "PUT", body: data });
};
const addUser = async (data) => {
  return $fetch("/api/user", { method: "GET", body: data });
};

export { addUser as a, deleteUser as d, updateUser as u };
//# sourceMappingURL=user-BOMUv8Fh.mjs.map
