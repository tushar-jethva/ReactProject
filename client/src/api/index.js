import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export const UserSignUp = async (data) => await API.post("/signup", data);
export const UserSignIn = async (data) => await API.post("/signin", data);

//Products
export const getAllProducts = async (category) => {
console.log(category,"Hello");
 const res = await API.get(`/getCategoryProducts?category=${category}`);
 console.log(res.data)
 return res.data
}

export const getProductDetails = async (id) => await API.get(`/products/${id}`);

//Cart

export const getCart = async (token) => {
  const res = await API.get("/getAllCustomerCartProducts", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res.data)
  return res.data;
}
  

export const addToCart = async (token, data) => {
  await API.post(`/addCartProduct`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return "Done";
}
 

export const deleteFromCart = async (token, data) =>
  await API.patch(`/user/cart/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

//Favourites

export const getFavourite = async (token) =>
  await API.get(`/user/favorite`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToFavourite = async (token, data) =>
  await API.post(`/user/favorite/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteFromFavourite = async (token, data) =>
  await API.patch(`/user/favorite/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

//Orders

export const placeOrder = async (token, data) =>
  await API.post(`/user/order/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrders = async (token) =>
  await API.get(`/user/order/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
