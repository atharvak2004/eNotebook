import React from "react";
import axios from "axios";
import dotenv from 'dotenv'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, 
});

export default api;
