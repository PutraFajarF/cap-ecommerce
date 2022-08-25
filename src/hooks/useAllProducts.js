import { useEffect, useState } from "react";
import api from "../api";

export const useAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setAPIData] = useState([]);
  
    const getAllProducts = async (page, limit, sortBy, order) => {
      try {
        setLoading(true);
        const res = await api.getAll(page, limit, sortBy, order);

        setAPIData(res.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
  
  return [apiData, loading, getAllProducts];
};


export const useProductById = (id) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setAPIData] = useState([]);
  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await api.getById(id);
       
        setAPIData(res.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getProductById();
  }, [id]);
  return { apiData, loading };
};