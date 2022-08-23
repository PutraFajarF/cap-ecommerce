import { useEffect, useState } from "react";
import axios from "axios";


export const useAllProducts = (id) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setAPIData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        let response;
        if (id) {
          response = await axios.get(
            `https://63043b070de3cd918b43bc9b.mockapi.io/product/${id}`
          );
        } else {
          response = await axios.get(
            `https://63043b070de3cd918b43bc9b.mockapi.io/product`
          );
        }

        setAPIData(response.data);
        setLoading(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, [id]);
  return { apiData, loading };
};