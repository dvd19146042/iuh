export const getAll = () => {
  return $fetch("/api/users");
};

export const deleteUser = (id: string) => {
  console.log(id);
  return $fetch("/api/user", {
    params: {
      id,
    },
  });
};

export const updateUser = (data: any) => {
  return $fetch("/api/user", { method: "PUT", body: data });
};

export const addUser = (data: any) => {
  return $fetch("/api/user", { method: "GET", body: data });
};
