import instanceAxios from "./interceptors";
const API_Products = {
  getAllProducts: async (category: string | null, search: string | null) => {
    if (category) {
      let response = await instanceAxios({
        url: "/products",
        method: "GET",
        params: {
          category,
        },
      });
      return response;
    } else if (search) {
      console.log("JUMP TO SEARCH");
      let response = await instanceAxios({
        url: "/products",
        method: "GET",
        params: {
          search,
        },
      });
      return response;
    } else {
      let response = await instanceAxios({
        url: "/products",
        method: "GET",
      });
      return response;
    }
  },
};

export { API_Products };
