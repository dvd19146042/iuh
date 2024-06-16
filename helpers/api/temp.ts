export const getTempHardWareById = () => {
  return $fetch<{code:string}>("/api/temp/bin");
};

export const resetTempHardWare = () => {
  return $fetch("/api/temp/bin", { method: "POST", body: { code: "" } });
};
