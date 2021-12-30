import axios from "axios";

const url = "http://localhost:5001/posts"; // FIX-ME TODO: change this to the container api name if not in dev mode

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
