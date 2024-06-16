export const getHardWareById = async (id: string) => {
  return $fetch("/api/hardware/bin", {
    params: {
      id,
    },
  });
};

export const notiHareWare = async (id: string) => {
  return $fetch("/api/hardware/bin", {
    params: {
      id,
    },
  });
};
