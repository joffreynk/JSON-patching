export const headers = {
  mode: "cors",
  headers: {
    withCredentials: true,
    token: localStorage.getItem("patchingMicroservice")
      ? JSON.parse(localStorage.getItem("patchingMicroservice")).token
      : undefined,
  },
};