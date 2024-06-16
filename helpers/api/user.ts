export const getAll =async () => {
  return $fetch("/api/users");
};

export const deleteUser = async (id: string) => {
  console.log(id);
  return $fetch("/api/user", {
    method:"DELETE",
    params: {
      id,
    },
  });
};

export const updateUser = async(data: any) => {
  return $fetch("/api/user", { method: "PUT", body: data });
};

export const addUser = async(data: any) => {
  return $fetch("/api/user", { method: "GET", body: data });
};
