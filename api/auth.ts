
export const login = async (data: { email: string; password: string }) => {
  return await $fetch("/api/login",{
    method:"POST",
    body:data
  });
};
