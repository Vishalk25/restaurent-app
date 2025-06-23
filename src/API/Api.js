import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://have-around-server.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllItemsReq = () => {
  return axios.get("/food");
};

export const getCartItemsReq = () => {
  return axios.get("/cart");
};

export const deleteCartItemsReq = (id) => {
  return axios.delete(`/cart/${id}`);
};

export const postCartItem = (data) => {
  return axios.post("/cart", {
    data: data,
  });
};

// Patch is used to edit
// Put
